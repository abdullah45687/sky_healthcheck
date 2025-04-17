from django.db import models
from django.contrib.auth.models import AbstractUser

# Custom User model
class User(AbstractUser):
    ROLE_CHOICES = [
        ('engineer', 'Engineer'),
        ('leader', 'Team Leader'),
        ('admin', 'Administrator'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    # Fix clashes with auth.User reverse accessors
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

class Role(models.Model):
    role_name = models.CharField(max_length=50)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_role')  # renamed reverse

class Department(models.Model):
    name = models.CharField(max_length=100)
    leader = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="leading_department")

class Team(models.Model):
    name = models.CharField(max_length=100)
    team_leader = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="leading_team")
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

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
