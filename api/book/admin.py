from django.contrib import admin

from book.models import BookItem


class BookItemAdmin(admin.ModelAdmin):
    model = BookItem
    exclude = ('uuid', 'created',)

admin.site.register(BookItem, BookItemAdmin)
