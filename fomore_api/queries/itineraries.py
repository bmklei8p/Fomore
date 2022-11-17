from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import ItineraryIn, ItineraryOut, Event, EventIn

class ItineraryQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "itineraries"

    def create(self, itinerary: ItineraryIn) -> ItineraryOut:
        props = itinerary.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return ItineraryOut(**props)

    def delete(self, id: str):
        self.collection.delete_one({
            "_id": ObjectId(id)
            })

    def find_one(self, id: str):
        return self.collection.find_one({"_id": ObjectId(id)})




    def get_all(self) -> List[ItineraryOut]:
        result = self.collection.aggregate(
            [
                {
                    "$lookup": {
                        "from": "events",
                        "localField": "_id",
                        "foreignField": "event_id",
                        "as": "events",
                    }
                },
                {"$sort": {"name": 1}},
            ]
        )
        itineraryPropsList = list(result)
        for itineraryProps in itineraryPropsList:
            itineraryProps["id"] = str(itineraryProps["_id"])
            itineraryProps["events"] = [
                str(props["account_id"]) for props in itineraryProps["events"]
            ]
        return [ItineraryOut(**itinerary) for itinerary in itineraryPropsList]


class EventQueries(Queries):
    DB_NAME = "fomore-db"
    COLLECTION = "events"

    def create(self, event: EventIn) -> Event:
        props = event.dict()
        props["account_id"] = ObjectId(props["account_id"])
        props["itinerary_id"] = ObjectId(props["itinerary_id"])
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        props["account_id"] = str(props["account_id"])
        props["itinerary_id"] = str(props["itinerary_id"])
        return Event(**props)

    def delete(self, itinerary_id: str, account_id: str):
        self.collection.delete_one(
            {
                "account_id": ObjectId(account_id),
                "itinerary_id": ObjectId(itinerary_id),
            }
        )
