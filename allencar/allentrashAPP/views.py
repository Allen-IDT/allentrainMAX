from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.
def Test(request):
    now = datetime.now()
    return render(request,"test.html",locals())