# Generated by Django 5.0.6 on 2024-05-15 18:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0003_book_author'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='book',
            options={'ordering': ['name']},
        ),
    ]