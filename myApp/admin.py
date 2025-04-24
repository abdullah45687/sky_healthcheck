from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Role, Department, Team, Session, HealthCheckCard, Vote, Summary, Question, HealthCheckResponse
from .models import User

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = BaseUserAdmin.fieldsets + (
        ('Custom Fields', {'fields': ('role',)}),
    )

admin.site.register([Role, Department, Team, Session, HealthCheckCard, Vote, Summary, Question])

@admin.register(HealthCheckResponse)
class HealthCheckResponseAdmin(admin.ModelAdmin):
    list_display = ('user', 'question', 'answer', 'comment', 'submitted_at')
