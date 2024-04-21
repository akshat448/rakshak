from django.shortcuts import render

# Create your views here.
def index(request):
    # View code here...
    return render(request, 'index.html')

def about_us(request):
    # View code here...
    return render(request, 'about.html')

def services(request):
    # View code here...
    return render(request, 'services.html')

def education(request):
    # View code here...
    return render(request, 'education.html')

def community(request):
    # View code here...
    return render(request, 'community.html')