c=0
$("#search-train").on('click',function(){
  c=0
  $("#apireponse").empty()
  GetAuthorizationHeader();
})
// $(function () {
//   GetAuthorizationHeader();
//   // GetApiResponse();
// });

function GetAuthorizationHeader() {
  const parameter = {
      grant_type:"client_credentials",
      client_id: "B1043022-151f1de7-c978-4d3f",
      client_secret: "040cc716-81af-43de-9a49-b9846d3dde30"
  };
  
  let auth_url = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";
      
  $.ajax({
      type: "POST",
      url: auth_url,
      crossDomain:true,
      dataType:'JSON',                
      data: parameter,
      async: false,       
      success: function(data){            
          // $("#accesstoken").text(JSON.stringify(data));
          data=JSON.stringify(data)
          GetApiResponse(data);                        
      },
      error: function (xhr, textStatus, thrownError) {
          
      }
  });          
}


function GetApiResponse(data){
  // let accesstokenStr = $("#accesstoken").text(); 
  let accesstokenStr = data;   

  let accesstoken = JSON.parse(accesstokenStr);

  if(accesstoken !=undefined){
      $.ajax({
          type: 'GET',
          url: 'https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/DailyTimetable/OD/1001/to/1011/2023-06-08?',
          headers: {
              "authorization": "Bearer " + accesstoken.access_token,                
            },            
          async: false,
          success: function (Data) {             
            console.log('Data', Data);
            pointfinish(Data)
          },
          error: function (xhr, textStatus, thrownError) {
              // console.log('errorStatus:',textStatus);
              // console.log('Error:',thrownError);
          }
      });
  }
}

function pointfinish(Data){
  let starting=$("#station-select").val()
  let ending=$("#station-select-end").val()
  for(var i=0;i<=Data.length-1;i++){
    if(starting==Data[i].DailyTrainInfo.StartingStationName.Zh_tw){
      for(var q=0;q<=Data[i].StopTimes.length-1;q++){
        if(ending==Data[i].StopTimes[q].StationName.Zh_tw){
          var Datamaxstart=Data[i].StopTimes[0]
          var DatamaxStop=Data[i].StopTimes[q]
          myfunction(Datamaxstart,DatamaxStop,Data,i)
        }
      }
    }
  }
}

function myfunction(Datamaxstart,DatamaxStop,Data,i){
  var span = document.createElement('div');
  span.setAttribute("class","myH1")
  document.getElementById("apireponse").appendChild(span);
  // $(".myH1").css("border-style","none")
  span.setAttribute("id","spanid"+c)
  var newinput = document.createElement('input');
  newinput.setAttribute("type","radio")
  newinput.setAttribute("name","option")
  document.getElementById("spanid"+c).appendChild(newinput)
  var newdiv = document.createElement('div');
  document.getElementById("spanid"+c).appendChild(newdiv)
  newdiv.textContent=Datamaxstart.ArrivalTime
  var new2div2 = document.createElement('div');
  document.getElementById("spanid"+c).appendChild(new2div2)
  new2div2.innerHTML='<i class="fi fi-rr-arrow-small-right">'+DatamaxStop.ArrivalTime+"</i>"
  var TrainNodiv = document.createElement('div');
  document.getElementById("spanid"+c).appendChild(TrainNodiv)
  TrainNodiv.textContent=" 車號 : "+Data[i].DailyTrainInfo.TrainNo
  c+=1
}









// 日期
$(function(){
  $("#starDay").datepicker({
    changeMonth:true,
    changeYear:true,
    dateFormat:'yy-mm-dd',
    onSelect:function(dateText,inst){
      if(new Date(dateText).getTime()< new Date('2017-10-01').getTime()){
        alert("開始時間不得選擇")
        $("#starDay").val(inst.lastVal)
        return false
      }
    }
  })
})
$("#startDay").siblings('i').eq(0).click(function(){
  $("#starDay").datepicker("show")
})

const transportSelect = document.getElementById('transport');
const departureInput = document.getElementById('departure');
