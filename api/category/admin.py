from django.contrib import admin

from category.models import CategoryItem


class CategoryItemAdmin(admin.ModelAdmin):
    model = CategoryItem
    exclude = ('uuid','created',)

admin.site.register(CategoryItem, CategoryItemAdmin)
