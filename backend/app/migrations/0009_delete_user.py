# Generated by Django 5.1 on 2024-08-23 09:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]