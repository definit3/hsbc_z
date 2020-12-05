from django.urls import path, include
from hsbc_z_api import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('get_risk', views.GetRisk, name='GetRisk'),
    path('', views.GetFirst, name='GetFirst'),
    path('get_recommendation', views.GetRecommendation, name='GetRecommendation'),
    path('risk',views.risk_assess, name='risk_assess'),
    path('result',views.show_recommendations,name='result')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
