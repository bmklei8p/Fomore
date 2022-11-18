from fastapi import APIRouter, Depends, HTTPException, status
from models import AccountOut, EventIn, Event, EventOut, EventList
from queries.events import EventQueries
from routers.sockets import socket_manager
from .auth import authenticator
from datetime import datetime
import requests
from keys import yelp_api_key

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.post("/events", response_model=EventOut)
async def create_event(
    event: EventIn,
    repo: EventQueries = Depends(),
):
    event = repo.create(event)
    await socket_manager.broadcast_refetch()
    return event


@router.get("/events", response_model=EventList)
def get_events(repo: EventQueries = Depends()):
    return EventList(events=repo.get_all())



# @router.get("/events/{event_id}", response_model=EventOut)
# def get_event(
#     event_id: str,
#     repo: EventQueries = Depends(),
#     ):
#     event = repo.get_one(event_id)
#     return event


@router.delete("/events/{event_id}", response_model=bool)
async def delete_event(
    event_id: str,
    repo: EventQueries = Depends(),
):
    await socket_manager.broadcast_refetch()
    repo.delete(id=event_id)
    return True


@router.put("/events/{event_id}", response_model=EventOut)
def update_event(
    body: dict,
    event_id: str,
    repo: EventQueries = Depends(),
):
    event = repo.update(event_id, body)
    return event


@router.get("/restaurant_search/")
def get_external_restaurant(
    location: str,
    date: datetime,
    itinerary_id: str
):
    url = 'https://api.yelp.com/v3/businesses/search'
    params = {
        "term": 'restaurant',
        "location": location,
        "radius": 5000,
        "sort_by": "rating",
        "limit": 5,
    }
    headers = {"Authorization": yelp_api_key}
    response = requests.get(url, params=params, headers=headers)
    data = response.json()
    res = [{
        "name": resturant["name"],
        "date": date,
        "location": location,
        "category": "resturant",
        "venue": "N/A",
        "description":resturant["categories"][0]["title"],
        "itinerary_id": itinerary_id,
        "image_url": resturant["image_url"]
    } for resturant in data["businesses"]]
    return res

@router.get("/event_search/")
def get_external_event(
    location: str,
    start_date: datetime,
    end_date: datetime,
    itinerary_id: str
):
    start = start_date.timestamp()
    end = end_date.timestamp()
    url = 'https://api.yelp.com/v3/events'
    params = {
        "location": location,
        "start_date": start,
        "end_date": end,
        "sort_on": "popularity",
        "limit": 5,
       }
    headers = {"Authorization": yelp_api_key}
    response = requests.get(url, params=params, headers=headers)
    data = response.json()
    # res = [{
    #     # "name": resturant["name"],
    #     # "date": date,
    #     # "location": location,
    #     # "category": "resturant",
    #     # "venue": "N/A",
    #     # "description":resturant["categories"][0]["title"],
    #     # "itinerary_id": itinerary_id,
    #     # "image_url": resturant["image_url"]
    # } for resturant in data["businesses"]]
    return data
