from django.contrib import admin
from . models import BoardMember

class BoardMemberAdmin(admin.ModelAdmin):
  list_display = ('name', 'position', 'publish')
  list_display_links = ('name', 'position')
  list_filter = ('position',)
  list_editable = ('publish',)
  search_fields = ('name', 'position')
  list_per_page = 25

admin.site.register(BoardMember, BoardMemberAdmin)
# Register your models here.
