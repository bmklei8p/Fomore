FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

# Copy the top-level files in your service's directory
# Modify these instructions to do that
COPY . .

RUN pip install -r requirements.txt
CMD uvicorn main:app --reload --host 0.0.0.0 --port $PORT
