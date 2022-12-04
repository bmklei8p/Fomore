from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from routers import auth
from routers import accounts
from routers import itineraries
from routers import sockets
from routers import events
from routers import yelp

app = FastAPI()

origins = [
    os.environ.get("CORS_HOST"),
    "https://patcerutti23.gitlab.io",
    "http://localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    os.environ.get("CORS_HOST"),
],
    allow_credentials=True,
    allow_methods=["POST", "GET", "DELETE", "PUT"],
    allow_headers=["Origin, X-Requested-With, Content-Type, Accept, Authorization, WWW-Authenticate"],
)
app.include_router(auth.authenticator.router)
app.include_router(accounts.router)
app.include_router(sockets.router)
app.include_router(events.router, prefix="/api")
app.include_router(itineraries.router, prefix="/api")
app.include_router(yelp.router, prefix="/api")
