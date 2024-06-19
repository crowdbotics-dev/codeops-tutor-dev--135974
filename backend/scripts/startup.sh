#!/bin/bash

python manage.py migrate --noinput

waitress-serve --port=$PORT codeops_tutor_dev__135974.wsgi:application
