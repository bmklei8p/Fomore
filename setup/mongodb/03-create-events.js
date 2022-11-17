conn = Mongo();
db = conn.getDB("fomore-db");

db.events.insertMany([
  {
    name: "taylor swift concert $28000",
    date: "string",
    location: "string",
    category: "string",
    venue: "string",
    description: "too expensive",
    itinerary_id: "63755aa26282cfade5af40f9",
  },
]);
