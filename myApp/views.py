from django.shortcuts import render,redirect

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required

from .models import HealthCheckResponse
from django.contrib import messages
import json


def home(request):
    context ={}
    return render(request, 'myApp/home.html', context)  # Returns 200




def voting_page(request):
    return render(request, 'myApp/accountPage.html')

def forget_password(request):
    return render(request, 'myApp/forgetPassword.html') 

def profile_page(request):
    return render(request, 'myApp/profilePage.html')


def team_results(request):
    teams = range(1, 10)  # Team 1 to 9
    grid = [
        ['green', 'yellow', 'yellow', 'red', 'green', 'red', 'yellow', 'red', 'yellow'],
        ['red', 'yellow', 'green', 'red', 'yellow', 'red', 'yellow', 'green', 'red'],
        ['green', 'red', 'yellow', 'red', 'yellow', 'red', 'red', 'red', 'yellow'],
        ['red', 'yellow', 'red', 'green', 'red', 'green', 'yellow', 'red', 'red'],
        ['red', 'red', 'yellow', 'red', 'yellow', 'red', 'red', 'green', 'yellow'],
        ['yellow', 'green', 'red', 'yellow', 'green', 'red', 'yellow', 'red', 'yellow'],
        ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'yellow'],
    ]
    return render(request, 'myApp/teamResults.html', {'teams': teams, 'grid': grid})


def individual_results(request):
    return render(request, 'myApp/individualResults.html')

def individual_results_graph(request):
    return render(request, 'myApp/individualResultsGraph.html')
def team_results_graph(request):
    return render(request, 'myApp/teamResultsGraph.html')

def healthcheck_card(request):
    return render(request, 'myApp/healthcheckcard.html')

def save_healthcheck(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        for item in data:
            question_text = item['question']
            answer = item['answer']
            comment = item.get('comment', '')
            
            question, created = Question.objects.get_or_create(text=question_text)
            HealthcheckResponse.objects.create(
                user=request.user,
                question=question,
                answer=answer,
                comment=comment
            )
        return redirect('individual_results')  # or any page you want
    return render(request, 'myApp/healthcheckCard.html')

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import HealthCheckResponse
import json

@csrf_exempt  # only needed if you're not using {% csrf_token %} in template
@login_required
def healthcheck_card_submit(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = request.user

        for entry in data:
            HealthCheckResponse.objects.create(
                user=user,
                question=entry['question'],
                answer=entry['answer'],
                comment=entry['comment']
            )
        return JsonResponse({'status': 'success'})


from django.shortcuts import render

def view_as_table(request):
    return render(request, 'myApp/viewAsTable.html')

def view_as_graph(request):
    return render(request, 'myApp/viewAsGraph.html')


def login_page(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  # Update this to your desired page
        else:
            messages.error(request, 'Invalid email or password.')
    return render(request, 'myApp/login.html')


@login_required
def home_redirect(request):
    if request.user.is_superuser:
        return render(request, 'myApp/home.html', {'user': request.user})
    else:
        return redirect('voting-page')
    
def account_page(request):
    return render(request, 'myApp/accountPage.html')  

def voting_page(request):
    return render(request, 'myApp/healthcheckcard.html')  