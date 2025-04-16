from django.contrib import admin
from .models import User, Role, Department, Team, Session, HealthCheckCard, Vote, Summary

admin.site.register([User, Role, Department, Team, Session, HealthCheckCard, Vote, Summary])
