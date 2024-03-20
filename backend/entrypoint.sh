#!/bin/sh

cd /app/backend

gunicorn --workers=3 --bind 0.0.0.0:8080 backend.wsgi
