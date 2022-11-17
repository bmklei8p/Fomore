from fastapi import APIRouter, Depends, HTTPException, status
from models import AccountOut, EventIn, Event, EventOut, EventList
from queries.events import EventQueries
from routers.sockets import socket_manager
from .auth import authenticator

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
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    setattr(event, "account_id", account.id)
    event = repo.create(event)
    await socket_manager.broadcast_refetch()
    return event


@router.get("/events", response_model=EventList)
def get_events(repo: EventQueries = Depends()):
    return EventList(events=repo.get_all())



@router.get("/events/{event_id}", response_model=EventOut)
def get_event(
    event_id: str,
    repo: EventQueries = Depends(),
    ):
    event = repo.get_one(event_id)
    return event


@router.delete("/events/{event_id}", response_model=bool)
async def delete_event(
    event_id: str,
    repo: EventQueries = Depends(),
):
    await socket_manager.broadcast_refetch()
    repo.delete(id=event_id)
    return True


# @router.put("/itineraries/{itinerary_id}", response_model=ItineraryIn)
