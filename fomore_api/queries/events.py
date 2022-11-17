from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import Event, EventIn, EventOut


class EventQueries(Queries):
    DB_NAME = "fomore-db"
    COLLECTION = "events"

    def create(self, event: EventIn) -> Event:
        props = event.dict()
        print(props)
        # props["account_id"] = ObjectId(props["account_id"])
        # props["itinerary_id"] = ObjectId(props["itinerary_id"])
        # self.collection.insert_one(props)
        # props["id"] = str(props["_id"])
        # props["account_id"] = str(props["account_id"])
        # props["itinerary_id"] = str(props["itinerary_id"])
        # return Event(**props)

    def delete(self, itinerary_id: str, account_id: str):
        self.collection.delete_one(
            {
                "account_id": ObjectId(account_id),
                "itinerary_id": ObjectId(itinerary_id),
            }
        )
    def get_all(self) -> List[EventOut]:
        result = self.collection.find()
        event_props_list = list(result)
        for event_props in event_props_list:
            event_props["id"] = str(event_props["_id"])
        return [EventOut(**event) for event in event_props_list]
