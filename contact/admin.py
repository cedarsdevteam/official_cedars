from django.contrib import admin

from django.contrib import admin
from . models import Contact, NewsLetter

class ContactAdmin(admin.ModelAdmin):
  list_display = ('sender', 'subject', 'email')
  list_display_links = ('sender', 'subject')
  search_fields = ('sender', 'subject')
  list_per_page = 25

class NewLetterAdmin(admin.ModelAdmin):
  list_display = ('email',)
  list_per_page = 25


admin.site.register(NewsLetter, NewLetterAdmin)
admin.site.register(Contact, ContactAdmin)
