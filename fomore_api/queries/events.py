from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import Event, EventIn, EventOut


class EventQueries(Queries):
    DB_NAME = "fomore-db"
    COLLECTION = "events"

    def create(self, event: EventIn) -> EventOut:
        props = event.dict()
        print(props)
        props["itinerary_id"] = ObjectId(props["itinerary_id"])
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        props["itinerary_id"] = str(props["itinerary_id"])
        return EventOut(**props)

    def delete(self, id: str):
        self.collection.delete_one(
            {
                "_id": ObjectId(id),
            }
        )

    def get_all(self) -> List[EventOut]:
        result = self.collection.find()
        event_props_list = list(result)
        for event_props in event_props_list:
            event_props["id"] = str(event_props["_id"])
            event_props["itinerary_id"] = str(event_props["itinerary_id"])
        return [EventOut(**event) for event in event_props_list]
