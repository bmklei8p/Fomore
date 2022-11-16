from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List
from datetime import date


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except:
                raise ValueError(f"Not a valid object id: {value}")
        return value


class SessionOut(BaseModel):
    jti: str
    account_id: str


class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str


class Account(AccountIn):
    id: PydanticObjectId
    roles: List[str]


class AccountOut(BaseModel):
    id: str
    email: str
    full_name: str
    roles: List[str]



class ItineraryIn(BaseModel):
   name: str
   start_date: date
   end_date: date
   location: str
#    events: List[EventOut]



class Itinerary(ItineraryIn):
    id: PydanticObjectId


class ItineraryOut(ItineraryIn):
    id: str


class ItineraryList(BaseModel):
    itineraries: List[ItineraryOut]

class EventIn(BaseModel):
    name: str
    date: date
    location: str
    category: str
    venue: str
    description:str
    itinerary_id: int
    account_id: int

class Event(EventIn):
    id: PydanticObjectId


class EventOut(EventIn):
    id: int

class EventList(BaseModel):
    events: List[EventOut]
