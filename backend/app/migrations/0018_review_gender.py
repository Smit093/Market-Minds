# Generated by Django 5.0.1 on 2024-09-15 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0017_user_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='gender',
            field=models.CharField(default='male', max_length=10),
        ),
    ]
