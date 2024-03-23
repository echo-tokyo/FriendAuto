#!/bin/sh

cd /app/backend

gunicorn --workers=7 --bind 0.0.0.0:8080 backend.wsgi
