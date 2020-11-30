from django.urls import path, include
from hsbc_z_api import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.GetFirst, name='GetFirst'),
    path('get_recommendation', views.GetRecommendation, name='GetRecommendation')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
