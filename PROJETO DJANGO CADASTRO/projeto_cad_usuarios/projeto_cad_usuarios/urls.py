
from django.urls import path
from django.contrib import admin
from app_cad_usuarios import views

urlpatterns = [
    # rota, view responsável, nome de referência
    # marcellobcoach.com
    path("admin/", admin.site.urls),
    path("",views.SignupPage, name="signup"),
    path("login/",views.LoginPage, name="login"),
]
