from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate

User = get_user_model()

class LoginSerializer(serializers.Serializer):
    id = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        id = data.get("id", "")
        password = data.get("password", "")

        if id and password:
            user = authenticate(username=id, password=password)

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
    id = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True)
    username = serializers.CharField(required=True)  # 변경된 필드 이름
    age = serializers.DateField(input_formats=['%Y-%m-%d'], required=False, allow_null=True)  # input_formats 설정 추가
    gender = serializers.ChoiceField(choices=User.GENDER_CHOICES, required=False, allow_null=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'age', 'gender')

    def validate_id(self, value):
        # Check if the username is already in use
        if User.objects.filter(id=value).exists():
            raise serializers.ValidationError("이미 존재하는 계정입니다.")
        return value

    def create(self, validated_data):
        user = User(
            id=validated_data['id'],
            username=validated_data['username'],
            age=validated_data.get('age'),
            gender=validated_data.get('gender'),
        )

        password = validated_data['password']
        user.set_password(password)
        user.save()
        return user


# LogoutView에서 post method swagger test 시 request_body로 활용
class RefreshTokenSerializer(serializers.Serializer):
    refresh = serializers.CharField(help_text='Refresh token')
