from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings  # ✅ Needed for custom user reference


# ------------------------------
# Custom User model
# ------------------------------
class User(AbstractUser):
    ROLE_CHOICES = [
        ('engineer', 'Engineer'),
        ('leader', 'Team Leader'),
        ('admin', 'Administrator'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    # Avoid clashes with auth.User reverse accessors
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True,
        help_text='The groups this user belongs to.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        blank=True,
        help_text='Specific permissions for this user.',
    )


# ------------------------------
# Role / Department / Team
# ------------------------------
class Role(models.Model):
    role_name = models.CharField(max_length=50)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_role')

class Department(models.Model):
    name = models.CharField(max_length=100)
    leader = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="leading_department")

class Team(models.Model):
    name = models.CharField(max_length=100)
    team_leader = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="leading_team")
    department = models.ForeignKey(Department, on_delete=models.CASCADE)


# ------------------------------
# Session / HealthCheckCard / Vote / Summary
# ------------------------------
class Session(models.Model):
    date = models.DateField()
    status = models.CharField(max_length=20)

class HealthCheckCard(models.Model):
    STATUS_CHOICES = [('red', 'Red'), ('amber', 'Amber'), ('green', 'Green')]
    date = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    notes = models.TextField(blank=True)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)

class Vote(models.Model):
    engineer = models.ForeignKey(User, on_delete=models.CASCADE)
    health_card = models.ForeignKey(HealthCheckCard, on_delete=models.CASCADE)
    value = models.CharField(max_length=10, choices=HealthCheckCard.STATUS_CHOICES)
    comment = models.TextField(blank=True)

class Summary(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    health_card = models.ForeignKey(HealthCheckCard, on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)


# ------------------------------
# Question and Response Models
# ------------------------------
class Question(models.Model):
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text

from django.db import models

class HealthCheckResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.TextField()
    answer = models.CharField(max_length=10)
    comment = models.TextField(blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)  # ✅ Must be here

    def __str__(self):
        return f"{self.user.username} - {self.question[:30]} - {self.answer}"
