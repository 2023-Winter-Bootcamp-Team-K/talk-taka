from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        "NAME": 'projectDB',
        "USER": 'developer',
        "PASSWORD": 'Pratics!',
        "HOST": 'db',
        "PORT": '3306',
    }
}

SECRET_KEY ={
    "django-insecure-b9%x!n&-qcj(@ns=)w_cawbbx#xf9%54%i*+u=fmk55w=e)%8q"
}