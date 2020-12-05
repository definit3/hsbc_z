from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
import json
import sys
from hsbc_z_api import recommendation_list

client_risk="High"


def risk_assess(request):
    return render(request, 'risk_assess.html')

def show_recommendations(request):
    global client_risk
    my_list=recommendation_list.risk_list[client_risk]
    print(my_list)
    return render(request, 'result.html',{'my_dict':my_list,'risk':client_risk})


#APIs HERE
# Create your views here.
class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return

class GetRiskAPI(APIView):

    def post(self, request, *args, **kwargs):
        response = {}
        response['status'] = 500
        try:
            data = request.data
            global client_risk
            client_risk=data['risk']
            response['status'] = 200
            response['risk']=data['risk']

        except Exception as e:
            e_type, e_object, e_tb = sys.exc_info()
        return Response(data=response)

class GetFirstAPI(APIView):

    def get(self, request, *args, **kwargs):
        response = {}
        response['status'] = 500
        try:
            response['status']=100
            response['risk'] = 'high'
        except Exception as e:
            e_type, e_object, e_tb = sys.exc_info()
        return Response(data=response)

#risk : low, moderately_low, moderate, moderately_high, high
class GetRecommendationAPI(APIView):

    def post(self, request, *args, **kwargs):
        response = {}
        response['status'] = 500
        try:
            data = request.data
            age = data['age']
            risk = data['risk']
            capital=data['capital']
            time=data['time']

            response['status'] = 200
            response['data']=age+risk+capital+maturity

        except Exception as e:
            e_type, e_object, e_tb = sys.exc_info()
        return Response(data=response)



GetFirst=GetFirstAPI.as_view()
GetRisk=GetRiskAPI.as_view()
GetRecommendation=GetRecommendationAPI.as_view()