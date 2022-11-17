from fastapi import APIRouter, Depends, HTTPException, status
from models import AccountOut, ItineraryIn, ItineraryList, ItineraryOut
from queries.itineraries import ItineraryQueries
from routers.sockets import socket_manager
from .auth import authenticator

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.post("/itineraries", response_model=ItineraryOut)
async def create_itinerary(
    itinerary: ItineraryIn,
    repo: ItineraryQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    setattr(itinerary, "account_id", account.id)
    itinerary = repo.create(itinerary)
    await socket_manager.broadcast_refetch()
    return itinerary


@router.get("/itineraries", response_model=ItineraryList)
def get_itineraries(repo: ItineraryQueries = Depends()):
    return ItineraryList(itineraries=repo.get_all())



@router.get("/itineraries/{itinerary_id}", response_model=ItineraryOut)
def get_itinerary(
    itinerary_id: str,
    repo: ItineraryQueries = Depends(),
    ):
    itinerary = repo.get_one(itinerary_id)
    return itinerary


@router.delete("/itineraries/{itinerary_id}", response_model=bool)
async def delete_itinerary(
    itinerary_id: str,
    repo: ItineraryQueries = Depends(),
):
    await socket_manager.broadcast_refetch()
    repo.delete(id=itinerary_id)
    return True


# @router.put("/itineraries/{itinerary_id}", response_model=ItineraryIn)
