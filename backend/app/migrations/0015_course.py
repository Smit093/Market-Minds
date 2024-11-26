# Generated by Django 5.1 on 2024-08-26 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_delete_course'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('creator', models.CharField(max_length=100)),
                ('img', models.CharField(max_length=500)),
                ('ratings', models.FloatField()),
                ('price', models.CharField(max_length=50)),
                ('purchaseLink', models.CharField(max_length=100)),
            ],
        ),
    ]
