# Generated by Django 2.0.2 on 2018-02-16 08:07

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=128, unique=True)),
                ('description', models.TextField()),
                ('created', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
