import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import {
  useGetItinerariesQuery,
  useDeleteItineraryMutation,
} from "../../app/itineraryApi";
import Card from "react-bootstrap/Card";

function Itineraries() {
  const [deleteItinerary] = useDeleteItineraryMutation();
  const { data, error, isLoading } = useGetItinerariesQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      <form>
        {data.itineraries.map((itinerary) => (
          <Card
            key={itinerary.id}
            className="item-border"
            border="light"
            style={{ width: "40rem" }}
          >
            <Card.Header as="h5">{itinerary.name}</Card.Header>
            <Card.Body>
              <Card.Title>{itinerary.location}</Card.Title>
              <Card.Text>
                {new Date(itinerary.start_date).toLocaleDateString()} to{" "}
                {new Date(itinerary.end_date).toLocaleDateString()}
              </Card.Text>
              <button
                className="btn btn-primary"
                onClick={() => deleteItinerary(itinerary.id)}
              >
                delete
              </button>
              <Link to="/UpdateItineraryForm">
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{ float: "right" }}
                >
                  edit Itinerary
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
        ;
      </form>
    </div>
  );
}

export default Itineraries;
