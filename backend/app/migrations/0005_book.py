# Generated by Django 5.1 on 2024-08-11 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_delete_book'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('author', models.CharField(max_length=300)),
                ('cover', models.CharField(max_length=500)),
                ('ratings', models.BigIntegerField()),
                ('reviews', models.TextField()),
                ('available', models.TextField()),
                ('link', models.CharField(max_length=500)),
            ],
        ),
    ]