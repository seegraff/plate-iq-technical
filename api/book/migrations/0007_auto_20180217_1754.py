# Generated by Django 2.0.2 on 2018-02-17 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0006_auto_20180217_0329'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookitem',
            name='published',
            field=models.DateTimeField(),
        ),
    ]