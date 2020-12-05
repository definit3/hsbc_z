from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
import json



def risk_assess(request):
    if request.method=='GET':
        return render(request, 'risk_assess.html')

# def cityView(request):
#     if request.method=='GET':
#         cityForm = city()
#         parks=park.objects.all()
#         return render(request, 'city.html',{'park':parks,'city':cityForm})
#     else:
#         cityForm = city(request.POST)
#         if cityForm.is_valid():
#             cd=cityForm.cleaned_data
#             cities=cd['city']
#             parks=park.objects.filter(city__iexact=cities)
#             return render(request,'park2.html',{'park':parks})

#APIs HERE
# Create your views here.
class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return

class GetFirstAPI(APIView):

    def get(self, request, *args, **kwargs):
        response = {}
        response['status'] = 500
        try:
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
GetRecommendation=GetRecommendationAPI.as_view()