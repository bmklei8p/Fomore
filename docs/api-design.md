### GET list of events (third party)
Endpoint path: /events
Endpoint method: GET
Query parameters:
	Q: location (city name) and dates (start_date & end_date)
Headers:
	{“Authorization”: API_KEY}
Response: A list of events
Response shape: {
    "total": int,
    "events": [
        {
            "category": "food-and-drink",
            "cost": null,
            "cost_max": null,
            "description": string
            "Event_site_url": string
            "id": string
            "Image_url": string
            "latitude": int
            "longitude": int
            "name": string
            "Tickets_url": string
            "time_end": int
            "time_start": int
            "location": string
            "business_id": string
            }
    ]
}


### GET list of restaurants(third party)
GET https://api.yelp.com/v3/businesses/search
Endpoint path: /restaurants
Endpoint method: GET
Query parameters:
	Q: location and term(restaurants) and radius
Headers:
	{“Authorization”: API_KEY}
Response: A list of events
Response shape:
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    // ...
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
}

### GET list of point of interest(third party)
GET https://api.yelp.com/v3/businesses/search
Endpoint path: /points_of_interest
Endpoint method: GET
Query parameters:
	Q: location (latitude & longitude) and term(tourist%attraction) and radius
Headers:
	{“Authorization”: API_KEY}
Response: A list of points of interest
Response shape:
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    // ...
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
}

}

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

### GET list of Itineraries
Endpoint path: /api/itineraries/
Endpoint method: GET
Headers:
  Authorization: Bearer token
Response: A list of all itineraries for a user
Response shape:
    ```json
    {
      "itineraries": [
        {"name": string,
         "start_date": string
         "end_date": string
	   “image”: url
        }
      ]
    }
    ```


## POST itinerary
Endpoint path: /api/itineraries/
Endpoint method: POST
Headers:
  Authorization: Bearer token
Request body:
    ```json
        {"name": string,
         "start_date": string
         "end_date": string
	   “image”: string url
   “Address”: string
   “Events”: []
        }
    }
Response: the new itinerary instance
Response body:
	```json
        {"name": string
         "start_date": string
         "end_date": string
	     “image”: string url
         “Address”: string
         “Events”: []
        }
    }
```


## GET Detail of Itinerary
Endpoint path: /api/itineraries/{itinerary_id}
Endpoint method: GET Detail
Headers:
  Authorization: Bearer token
Response: Details of a specific itinerary
Response shape:
    ```json
    {
      "itineraries": [
        {"name": string,
         "start_date": string
         "start_date": string
	   “image”: string url
   “Address”: string
   “Events”: [list of events],

        }
      ]
    }
```


### Delete Itinerary
Endpoint path: /itineraries/{itinerary_id}
Endpoint method: DELETE
Headers:
  Authorization: Bearer token
Response: Delete an itinerary
Response shape:
    ```json
    {“Deleted”: bool
    }
Endpoint path: /itineraries/{itinerary_id}
Endpoint method: PUT
Headers:
  Authorization: Bearer token
Response: Update an itinerary
Response shape:
    ```json
    {
   "name": string,
         "start_date": string
         "end_date": string
	   “image”: string url
   “Address”: string
   “Events”: []
        }
```


### User Created Events
Endpoint path: /api/events/
Endpoint method: POST
Headers:
	Authorization: Bearer Token
Response: create a new event
Request Body:
```json
    {
 “itinerary”: int,
 “name”: string,
 “date”: string,
 “location”: string,
 “description”: string
    }
```


### GET list of created events by user
Endpoint path: /api/events
Endpoint method: GET
Headers:
	Authorization: Bearer Token
Response: a list of created events by the user
Response Shape:
```json
{
  “events”: [
{
 “id”: int,
 “name”: string,
 “date”: string,
 “location”: string,
 }
]
   }
```

### GET detail of user event
Endpoint path: /api/event/{id}
Endpoint method: GET Detail
Headers:
	Authorization: Bearer Token
Response: details of a created event
Response Shape:

```json
    {
	 “id”: int,
 “itinerary: string,
 “name”: string,
 “date”: string,
 “location”: string,
 “description”: string
    }
```


### PUT update an event
Endpoint path: /api/event/{id}
Endpoint method: PUT
Headers:
	Authorization: Bearer Token
Response: update an event
Response Shape:

```json
    {
	 “id”: int,
 “itinerary: string,
 “name”: string,
 “date”: string,
 “location”: string,
 “description”: string
    }
```


### DELETE created event
Endpoint path: /api/event/{id}
Endpoint method: DELETE

Headers:
  Authorization: Bearer token

Response: Delete a created event
Response shape:
    ```json
    {
“Deleted”: bool
    }
