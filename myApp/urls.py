from django.urls import path
from . import views
from myApp.views import healthcheck_card_submit


urlpatterns = [
    path('home/', views.home_redirect, name='home'),
    path('account/', views.account_page, name='account_page'),
    path("voting/", views.voting_page, name="voting-page"),
    path("forgot-password/", views.forget_password, name="forget_password"),
    path("profile/", views.profile_page, name="profile_page"),
    path("team-results/", views.team_results, name="team_results"),
    path('individual-results/', views.individual_results, name='individual_results'),
    path('individual-results-graph/', views.individual_results_graph, name='individual_results_graph'),
    path('team-results-graph/', views.team_results_graph, name='team_results_graph'),
    path('healthcheck-card/', views.healthcheck_card, name='healthcheck_card'),
    path("healthcheck-card/", views.save_healthcheck, name="healthcheck_card"),
     path("healthcheck-card/", healthcheck_card_submit, name="healthcheck_card_submit"),
     path('view-as-table/', views.view_as_table, name='view_as_table'),
     path('view-as-graph/', views.view_as_graph, name='view_as_graph'),
      path('login/', views.login_page, name='login'),
]

