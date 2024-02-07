from django.contrib import admin
from . models import Contact, NewsLetter, GetInvolve

class ContactAdmin(admin.ModelAdmin):
  list_display = ('sender', 'subject', 'email')
  list_display_links = ('sender', 'subject')
  search_fields = ('sender', 'subject')
  list_per_page = 25

class GetInvolveAdmin(admin.ModelAdmin):
  list_display = ('fullname', 'email', 'phone', 'category')
  list_display_links = ('fullname', 'email')
  search_fields = ('fullname', 'email')
  list_per_page = 25

class NewLetterAdmin(admin.ModelAdmin):
  list_display = ('email',)
  list_per_page = 25


admin.site.register(NewsLetter, NewLetterAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(GetInvolve, GetInvolveAdmin)
