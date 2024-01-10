
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate

User = get_user_model()

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get("email", "")
        password = data.get("password", "")

        if email and password:
            user = authenticate(request=self.context.get('request'), username=email, password=password)

            if user is None:
                raise serializers.ValidationError("이메일 혹은 비밀번호가 틀렸습니다.")

            # soft-delete
            if user.is_deleted:
                raise serializers.ValidationError("삭제된 계정입니다.")

        else:
            raise serializers.ValidationError('이메일과 비밀번호를 입력하세요.')

        data["user"] = user
        return data


from rest_framework import serializers
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(required=True)
    age = serializers.IntegerField(required=False, allow_null=True)
    gender = serializers.ChoiceField(choices=User.GENDER_CHOICES, required=False, allow_null=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2', 'age', 'gender')

    def validate_email(self, value):
        # Check if the email is already in use
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("이미 존재하는 계정입니다.")
        return value

    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')

        if password != password2:
            raise serializers.ValidationError({'password': '비밀번호가 일치하지 않습니다.'})

        return data

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            age=validated_data.get('age'),
            gender=validated_data.get('gender'),
        )

        password = validated_data['password']
        user.set_password(password)
        user.save()
        return user


    # LogoutView에서 post method swagger test시 request_body로 활용
class RefreshTokenSerializer(serializers.Serializer):
    refresh = serializers.CharField(help_text='Refresh token')
