conn = Mongo();
db = conn.getDB("library");

db.itineraries.insertMany([
  {
    _id: ObjectId("12343a8014829a865bbf700d"),
    name: "Fun trip",
    start_date: 2021 - 04 - 13,
    end_date: 2022 - 04 - 13,
    location: "new york",
  },
]);
