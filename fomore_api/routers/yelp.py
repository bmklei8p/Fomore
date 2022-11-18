from fastapi import APIRouter, HTTPException, status
from datetime import datetime
import requests
from keys import yelp_api_key

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)

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
    date: datetime,
    itinerary_id: str
):
    date_epoch = int(date.timestamp())
    url = 'https://api.yelp.com/v3/events'
    params = {
        "location": location,
        "start_date": date_epoch,
        "sort_on": "popularity",
        "limit": 5,
       }
    headers = {"Authorization": yelp_api_key}
    response = requests.get(url, params=params, headers=headers)
    data = response.json()
    res = [{
        "name": event["name"],
        "date": date,
        "location": location,
        "category": "event",
        "venue": event["business_id"],
        "description":event["description"],
        "itinerary_id": itinerary_id,
        "image_url": event["image_url"]
    } for event in data["events"]]
    return res


# @router.get("/attraction_search/")
# def get_external_attracion(
# #     location: str,
#     date: datetime,
#     itinerary_id: str
# ):
#     url = 'https://api.yelp.com/v3/businesses/search'
#     params = {
#         "term": 'restaurant',
#         "location": location,
#         "radius": 5000,
#         "sort_by": "rating",
#         "limit": 5,
#     }
#     headers = {"Authorization": yelp_api_key}
#     response = requests.get(url, params=params, headers=headers)
#     data = response.json()
#     res = [{
#         "name": resturant["name"],
#         "date": date,
#         "location": location,
#         "category": "resturant",
#         "venue": "N/A",
#         "description":resturant["categories"][0]["title"],
#         "itinerary_id": itinerary_id,
#         "image_url": resturant["image_url"]
#     } for resturant in data["businesses"]]
#     return res
