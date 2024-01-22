import uuid

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


# User 관리하는 Manager
class CustomUserManager(BaseUserManager):
    def create_user(self, id, username, password=None, **extra_fields):
        if not id:
            raise ValueError('Users must have an id')
        if not username:
            raise ValueError('Users must have a username')

        user = self.model(
            id=id,
            username=username,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, id, username, password=None,**extra_fields):
        user = self.create_user(
            id=id,
            username=username,
            password=password,
            **extra_fields
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


# 삭제 기능 추가
class SoftDeleteModel(models.Model):
    is_deleted = models.BooleanField(default=False)

    class Meta:
        abstract = True

    def delete(self):
        self.is_deleted = True
        self.save()

    def restore(self):
        self.is_deleted = False
        self.save()


# User 테이블 만들기
class User(AbstractBaseUser, PermissionsMixin, SoftDeleteModel):
    MALE = 'male'
    FEMALE = 'female'
    OTHER = 'other'

    GENDER_CHOICES = [
        (MALE, 'Male'),
        (FEMALE, 'Female'),
        (OTHER, 'Other'),
    ]
    id = models.CharField(max_length=255, primary_key=True, unique=True)
    username = models.CharField(max_length=30)
    profile_picture = models.CharField(max_length=200, null=True)
    age = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, null=True, blank=True)

    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    # Custom manager
    objects = CustomUserManager()

    groups = models.ManyToManyField('auth.Group', related_name='user_groups', blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='user_permissions', blank=True)

    USERNAME_FIELD = 'id'
    REQUIRED_FIELDS = ['username', ]

    def __str__(self):
        return self.id
