from django.shortcuts import render

#Criando as views

def HomePage(request):
    return render(request, "templates/home.html")

def SignupPage(request):
    return render(request, "usuarios/cadastro.html")

def LoginPage(request):
    return render(request, "usuarios/login.html")
