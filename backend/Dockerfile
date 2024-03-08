FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /app
RUN pip install djangorestframework
RUN pip install django-cors-headers
RUN pip install psycopg2-binary
COPY . /app/


CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
