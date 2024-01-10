from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

def main_page(request):
    return HttpResponse("메인페이지입니다!")

def before_login_page(request):
    return HttpResponse("로그인 하기전 메인페이지입니다!")

#로그인 인증된 사람만 들어올 수 있게 할것!
def after_login_page(request):
    return HttpResponse("로그인 한 후 메인페이지입니다!")
