import re
from rest_framework import serializers
from .models import Testimony, Achievement

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = ['id','name','brief','numbers']

class TestimonySerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimony
        fields = ["id","name","position","testimony","picture"]
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Remove HTML tags from the testimony field using regex
        representation['testimony'] = re.sub("<.*?>", "", representation['testimony'])
        return representation