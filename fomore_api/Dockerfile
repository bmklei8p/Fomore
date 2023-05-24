FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

COPY ./requirements.txt .

RUN python -m pip install -r requirements.txt

COPY . .

ENV SSH_PASSWD "root:Docker!"
ENV MONGO_URL "mongodb+srv://bmklei8p:l2f1IiqPUHVk4Iww@cluster1.oa6x2bp.mongodb.net/?retryWrites=true&w=majority"
ENV SIGNING_KEY "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vdGhpbmdAbm90aGluZy5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiZnVsbF9uYW1lIjoiQnJ5YW4gS2xlaW5iZXJnIn0.h8I0gaOHFVT_7Ra2q2-MWuh8tjXhhKuTv09d5el76Jc"
ENV CORS_HOST "https://fomore.azurewebsites.net"
ENV YELP_API_KEY "Bearer aS-aMu7dCP2Ai8W4d5BAE2-0tCbgD_7LlnWNzDrPVUDUetlgxAiGGQ5MFDVn6ZqI4mnrbGOtBd8BS3BuUqKgFcB2WSSRojj4qdkhlL9c9nxXjJ_phUQXZKUBs4liZHYx"

RUN apt-get update \
        && apt-get install -y --no-install-recommends dialog \
        && apt-get update \
	&& apt-get install -y --no-install-recommends openssh-server \
	&& echo "$SSH_PASSWD" | chpasswd

EXPOSE 8081
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8081", "--proxy-headers"]