conn = Mongo();
db = conn.getDB("fomore-db");

db.itineraries.insertMany([
  {
    _id: ObjectId(""),
    name: "Fun trip",
    start_date: 2021 - 04 - 13,
    end_date: 2022 - 04 - 13,
    location: "new york",
  },
]);
