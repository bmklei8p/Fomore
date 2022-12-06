import json
import sys
sys.path.append('.')
from main import app
from fastapi.testclient import TestClient
from queries.itineraries import ItineraryQueries


client = TestClient(app) # replacing swagger in code

class ItineraryQueriesMock:
    def get_all(self):
        return []

    def create(self, itinerary):
        response = {
            "name": "New York Reunion",
            "start_date": "2022-12-06T22:20:14.171Z",
            "end_date": "2022-12-08T22:20:14.171Z",
            "location": "New York",
            "account_id": "637d311042e7b5cab655ce80",
            "id": "638fc0a73aeb89d463e0d87d"
            }
        response.update(itinerary)
        return response


def test_get_itineraries():
    # arrange
    app.dependency_overrides[ItineraryQueries] = ItineraryQueriesMock

    # act
    response = client.get('/api/itineraries')

    # assert
    # 1. get a 200
    assert response.status_code == 200
    # 2. should *call* queries.get_trucks()
    assert response.json() == {"itineraries": []}

    # cleanup
    app.dependency_overrides = {}

def test_create_itinerary():
    # arrange
    app.dependency_overrides[ItineraryQueries] = ItineraryQueriesMock
    itinerary = {
            "name": "New York Reunion",
            "start_date": "2022-12-06T22:20:14.171Z",
            "end_date": "2022-12-08T22:20:14.171Z",
            "location": "New York",
            "account_id": "637d311042e7b5cab655ce80"
            }

    # Act
    response = client.post('/api/itineraries', json.dumps(itinerary))

    # Assert
    assert response.status_code == 200
    assert response.json()['name'] == 'New York Reunion'
