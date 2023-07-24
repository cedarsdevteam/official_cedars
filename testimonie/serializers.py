from rest_framework import serializers
from .models import Testimony
import re


class TestimonySerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimony
        fields = ["id","name","position","testimony","picture"]
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Remove HTML tags from the testimony field using regex
        representation['testimony'] = re.sub("<.*?>", "", representation['testimony'])
        return representation