# API Design

### GET list of events (third party)
- **Path**: /events
- **Method**: GET
- **Query parameters**:
  ```
  {
        "location": location,
        "start_date": date_epoch,
        "sort_on": "popularity",
        "limit": 5,
        "radius": 5000,
  }
  ```
- **Headers**: {“Authorization”: YelP_API_KEY}
- **Response shape**: 
```
{"total": int,
    "events": [
        {
            "name": event["name"],
        "date": date,
        "location": event["location"]["city"],
        "category": "event",
        "venue": event["business_id"],
        "description":event["description"],
        "itinerary_id": itinerary_id,
        "image_url": event["image_url"],
        "url": event["event_site_url"]
        }
    ]
}    
```

### GET list of restaurants(third party)
- **GET** https://api.yelp.com/v3/businesses/search
- **Path**: /restaurant_search/
- **Method**: GET
- **Query parameters**:
```
  {
        "term": 'restaurant',
        "location": location,
        "radius": 5000,
        "sort_by": "rating",
        "limit": 5,
  }
```
- **Headers**: {“Authorization”: YELP_API_KEY}
- **Response shape**:
```
  [{
        "name": restaurant["name"],
        "date": date,
        "location": restaurant["location"]["city"],
        "category": "resturant",
        "address": restaurant["location"]["address1"],
        "rating": restaurant["rating"],
        "venue": "N/A",
        "description":restaurant["categories"][0]["title"],
        "itinerary_id": itinerary_id,
        "image_url": restaurant["image_url"],
        "url": restaurant["url"]
  }]
```

### GET list of Attractions (third party)
- GET https://api.yelp.com/v3/businesses/search
- **Path**: /attraction_search/
- **Method**: GET
- **Query parameters**:
```
{
        "term": 'tourist%attractions',
        "location": location,
        "radius": 5000,
        "sort_by": "rating",
        "limit": 5,
}
```
- **Headers**: {“Authorization”: YELP_API_KEY}
- **Response shape**:
```
[{
        "name": attraction["name"],
        "date": date,
        "location": attraction["location"]["city"],
        "category": "attraction",
        "venue": "N/A",
        "rating": "N/A",
        "address": "N/A",
        "description":attraction["categories"][0]["title"],
        "itinerary_id": itinerary_id,
        "image_url": attraction["image_url"],
        "url": attraction["url"]
}]
```
### Accounts
- **Paths**: /api/accounts, /token, /api/sessions/{account_id} 
- **Method**: Get, Post, Delete,
- **Request shape**: 
Post:
```
{
  email: str
  password: str
  full_name: str
}
```
Get:
```
{
  id: str
  email: str
  full_name: str
}
```
Delete:
```
{
  account_id: str
}
```
### Log in
* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        «key»: type»,
      },
      "token": string
    }
    ```

### Log out
* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```

### Itineraries
- **Path**: /itineraries
- **Method**: GET
- **Headers**: {"WWW-Authenticate": "Bearer"}
- **Response shape**:
```
{
  id: str
}
```


### POST itinerary
- **Path**: /api/itineraries/
- **Method**: Post
- **Headers**: {"WWW-Authenticate": "Bearer"}
Request body:
```
{
  name: str
  start_date: datetime
  end_date: datetime
  location: str
  account_id: str
}
```
Response body:
```
{
  id: str
}
```


## GET Detail of Itinerary
- **Path**: /api/itineraries/{itinerary_id}
- **Method**: GET Detail
- **Headers**: {"WWW-Authenticate": "Bearer"}
Response shape:
```
{
  name: str
  start_date: datetime
  end_date: datetime
  location: str
  account_id: str
}
```


### Delete Itinerary
- **Path**: /itineraries/{itinerary_id}
- **Method**: Delete, Put
- **Headers**: {"WWW-Authenticate": "Bearer"}
Response shape:
```
{
  Deleted: bool
}
```
- **Method**: PUT
- Headers: Authorization: Bearer token
Response shape:
```
{
  name: str
  start_date: datetime
  end_date: datetime
  location: str
  account_id: str
}
```


### User Created Events
- **Path**: /events/
- **Method**: Post
- **Headers**: {"WWW-Authenticate": "Bearer"}
Request Body:
```
{
  name: str
  date: datetime
  location: str
  category: str
  venue: Optional[str]
  rating: Optional[str]
  address: Optional[str]
  description: str
  itinerary_id: str
  image_url: Optional[str]
  url: Optional[str]
}
```
Response body:
```
{
  id: str
}
```


### GET list of created events by user
- **Path**: /events
- **Method**: GET
- **Headers**: {"WWW-Authenticate": "Bearer"}
Response Shape:
```
{
  events: List[EventOut]
}
```

### update or delete an event
- **Path**: /events/{event_id}
- **Method**: Put, Delete
- **Headers**: {"WWW-Authenticate": "Bearer"}
Response Shape:

```
{
  id: str
}
```


### DELETE created event
Response shape:
```
{
  Deleted: bool
}
```

