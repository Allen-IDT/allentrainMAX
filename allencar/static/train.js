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


// 火車站
function showSecondSelect() {
  var selectElement = document.getElementById("station-select");
  var secondSelectContainer = document.getElementById("second-select-container");

  if (selectElement.value === "臺北") {
    secondSelectContainer.style.display = "block";
  } else {
    secondSelectContainer.style.display = "none";
  }
  if (selectElement.value === "新北") {
    $("#second-New-Taipei").css("display","block");
  } else {
    $("#second-New-Taipei").css("display","none");
  }
  if (selectElement.value === "基隆") {
    $("#second-Kee-lung").css("display","block");
  } else {
    $("#second-Kee-lung").css("display","none");
  }
  if (selectElement.value === "台中") {
    $("#second-Taichung").css("display","block");
  } else {
    $("#second-Taichung").css("display","none");
  }
  if (selectElement.value === "桃園") {
    $("#second-Taoyuan").css("display","block");
  } else {
    $("#second-Taoyuan").css("display","none");
  }
  if (selectElement.value === "新竹縣") {
    $("#second-Hsinchu-County").css("display","block");
  } else {
    $("#second-Hsinchu-County").css("display","none");
  }
  if (selectElement.value === "新竹市") {
    $("#second-Hsinchu-City").css("display","block");
  } else {
    $("#second-Hsinchu-City").css("display","none");
  }
  // 苗栗
  if (selectElement.value === "苗栗") {
    $("#second-Miaoli").css("display","block");
  } else {
    $("#second-Miaoli").css("display","none");
  }
  if (selectElement.value === "彰化") {
    $("#second-Changhua").css("display","block");
  } else {
    $("#second-Changhua").css("display","none");
  }
  if (selectElement.value === "南投") {
    $("#second-Nantou").css("display","block");
  } else {
    $("#second-Nantou").css("display","none");
  }
  if (selectElement.value === "雲林") {
    $("#second-Yunlin").css("display","block");
  } else {
    $("#second-Yunlin").css("display","none");
  }
  if (selectElement.value === "嘉義縣") {
    $("#second-Chiayi-County").css("display","block");
  } else {
    $("#second-Chiayi-County").css("display","none");
  }
  if (selectElement.value === "嘉義市") {
    $("#second-Chiayi-City").css("display","block");
  } else {
    $("#second-Chiayi-City").css("display","none");
  }
  if (selectElement.value === "台南") {
    $("#second-Tainan").css("display","block");
  } else {
    $("#second-Tainan").css("display","none");
  }
  if (selectElement.value === "高雄") {
    $("#second-Kaohsiung").css("display","block");
  } else {
    $("#second-Kaohsiung").css("display","none");
  }
  if (selectElement.value === "屏東") {
    $("#second-Pintung").css("display","block");
  } else {
    $("#second-Pintung").css("display","none");
  }
  if (selectElement.value === "台東") {
    $("#second-Taitung").css("display","block");
  } else {
    $("#second-Taitung").css("display","none");
  }
  if (selectElement.value === "花蓮") {
    $("#second-Hualien").css("display","block");
  } else {
    $("#second-Hualien").css("display","none");
  }
  if (selectElement.value === "宜蘭") {
    $("#second-Yilan").css("display","block");
  } else {
    $("#second-Yilan").css("display","none");
  }
}


function showend() {
  var selectElement = document.getElementById("station-select-end");
  var secondSelectContainer = document.getElementById("second-select-container2");

  if (selectElement.value === "臺北") {
    secondSelectContainer.style.display = "block";
  } else {
    secondSelectContainer.style.display = "none";
  }
  if (selectElement.value === "新北") {
    $("#second-New-Taipei2").css("display","block");
  } else {
    $("#second-New-Taipei2").css("display","none");
  }
  if (selectElement.value === "基隆") {
    $("#second-Kee-lung2").css("display","block");
  } else {
    $("#second-Kee-lung2").css("display","none");
  }
  if (selectElement.value === "台中") {
    $("#second-Taichung2").css("display","block");
  } else {
    $("#second-Taichung2").css("display","none");
  }
  if (selectElement.value === "桃園") {
    $("#second-Taoyuan2").css("display","block");
  } else {
    $("#second-Taoyuan2").css("display","none");
  }
  if (selectElement.value === "新竹縣") {
    $("#second-Hsinchu-County2").css("display","block");
  } else {
    $("#second-Hsinchu-County2").css("display","none");
  }
  if (selectElement.value === "新竹市") {
    $("#second-Hsinchu-City2").css("display","block");
  } else {
    $("#second-Hsinchu-City2").css("display","none");
  }
  // 苗栗
  if (selectElement.value === "苗栗") {
    $("#second-Miaoli2").css("display","block");
  } else {
    $("#second-Miaoli2").css("display","none");
  }
  if (selectElement.value === "彰化") {
    $("#second-Changhua2").css("display","block");
  } else {
    $("#second-Changhua2").css("display","none");
  }
  if (selectElement.value === "南投") {
    $("#second-Nantou2").css("display","block");
  } else {
    $("#second-Nantou2").css("display","none");
  }
  if (selectElement.value === "雲林") {
    $("#second-Yunlin2").css("display","block");
  } else {
    $("#second-Yunlin2").css("display","none");
  }
  if (selectElement.value === "嘉義縣") {
    $("#second-Chiayi-County2").css("display","block");
  } else {
    $("#second-Chiayi-County2").css("display","none");
  }
  if (selectElement.value === "嘉義市") {
    $("#second-Chiayi-City2").css("display","block");
  } else {
    $("#second-Chiayi-City2").css("display","none");
  }
  if (selectElement.value === "台南") {
    $("#second-Tainan2").css("display","block");
  } else {
    $("#second-Tainan2").css("display","none");
  }
  if (selectElement.value === "高雄") {
    $("#second-Kaohsiung2").css("display","block");
  } else {
    $("#second-Kaohsiung2").css("display","none");
  }
  if (selectElement.value === "屏東") {
    $("#second-Pintung2").css("display","block");
  } else {
    $("#second-Pintung2").css("display","none");
  }
  if (selectElement.value === "台東") {
    $("#second-Taitung2").css("display","block");
  } else {
    $("#second-Taitung2").css("display","none");
  }
  if (selectElement.value === "花蓮") {
    $("#second-Hualien2").css("display","block");
  } else { 
    $("#second-Hualien2").css("display","none");
  }
  if (selectElement.value === "宜蘭") {
    $("#second-Yilan2").css("display","block");
  } else {
    $("#second-Yilan2").css("display","none");
  }

}
function showSelectedStation() {
  var selectElement = document.getElementById("station-select");
  var selectedValue = selectElement.value;

  var secondSelect = document.getElementById("second-select");
  var secondSelectedValue = secondSelect.value;

  alert("您選擇的火車站是：" + selectedValue);

  if (selectedValue === "taipei") {
    alert("您選擇的台北火車站分區是：" + secondSelectedValue);
  }
}




c=0
trainData=[]
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
          url: 'https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/DailyTrainInfo/Today/',
          headers: {
              "authorization": "Bearer " + accesstoken.access_token,                
            },            
          async: false,
          success: function (Data) {
            pointfinish(Data)
            // 取得時間
            for(var i=0;i<=trainData.length;i++){
              if(accesstoken !=undefined){
                $.ajax({
                    type: 'GET',
                    url: 'https://tdx.transportdata.tw/api/basic//v2/Rail/TRA/ODFare',
                    headers: {
                        "OriginStationID":trainData[i].StartingStationID+"to",
                        "DestinationStationID":trainData[i].EndingStationID,
                        "authorization": "Bearer " + accesstoken.access_token,                
                      },            
                    async: false,
                    success: function (DataMAX) {             
                      console.log('DataMAX', DataMAX);
                      pointfinish(Data,DataMAX)
                    },
                    error: function (xhr, textStatus, thrownError) {
                        // console.log('errorStatus:',textStatus);
                        // console.log('Error:',thrownError);
                    }
                });
            }
          }
              
          },
          error: function (xhr, textStatus, thrownError) {
              // console.log('errorStatus:',textStatus);
              // console.log('Error:',thrownError);
          }
      });
  }
}

function pointfinish(Data){
  let starting=$("#second-select-container #second-select").val()
  let ending=$("#second-New-Taipei2 #second-select").val()
  for(var i=0;i<=Data.length-1;i++){
    if(starting==Data[i].StartingStationName.Zh_tw && ending==Data[i].EndingStationName.Zh_tw){
      for(var q=0;q<=Data[i].StopTimes.length-1;q++){
        trainData.push(Data[q])
          // myfunction(Datamaxstart,DatamaxStop,Data,i)
      }
    }
  }
}



// function myfunction(Datamaxstart,DatamaxStop,Data,i){
//   var span = document.createElement('div');
//   span.setAttribute("class","myH1")
//   document.getElementById("apireponse").appendChild(span);
//   span.setAttribute("id","spanid"+c)
//   var newinput = document.createElement('input');
//   newinput.setAttribute("type","radio")
//   newinput.setAttribute("name","option")
//   document.getElementById("spanid"+c).appendChild(newinput)
//   var newdiv = document.createElement('div');
//   document.getElementById("spanid"+c).appendChild(newdiv)
//   newdiv.textContent=Datamaxstart.ArrivalTime
//   var new2div2 = document.createElement('div');
//   document.getElementById("spanid"+c).appendChild(new2div2)
//   new2div2.innerHTML='<i class="fi fi-rr-arrow-small-right">'+DatamaxStop.ArrivalTime+"</i>"
//   var TrainNodiv = document.createElement('div');
//   document.getElementById("spanid"+c).appendChild(TrainNodiv)
//   TrainNodiv.textContent=" 車號 : "+Data[i].DailyTrainInfo.TrainNo
//   c+=1
// }
