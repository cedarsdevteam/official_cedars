from django.contrib import admin
from . models import Testimony

class TestimonyAdmin(admin.ModelAdmin):
  list_display = ('name', 'position', 'is_published')
  list_display_links = ('name', 'position')
  list_filter = ('position',)
  list_editable = ('is_published',)
  search_fields = ('name', 'description', 'position')
  list_per_page = 25

admin.site.register(Testimony, TestimonyAdmin)
