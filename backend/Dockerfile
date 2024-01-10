# Use the official Python image as a base image
FROM python:3.8

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 다른 서비스들이 완전히 시작할 때까지 현재 서비스의 시작을 지연
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

# Set the working directory in the container
WORKDIR /backend

# Copy the requirements file into the container
COPY requirements.txt /backend/

# Install project dependencies
RUN pip install --upgrade pip && pip install -r requirements.txt
RUN pip install mysqlclient
RUN pip install channels
# Copy the project files into the container
COPY . .
