import { useGetItinerariesQuery, useDeleteItineraryMutation } from "./app/itineraryApi";
import ErrorNotification from "./ErrorNotification";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Itineraries() {
  const [ deleteItinerary ] = useDeleteItineraryMutation();
  const { data, error, isLoading } = useGetItinerariesQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
        {data.itineraries.map((itinerary) => {
          return (
            <Card
              className="item-border"
              border="light"
              style={{ width: "40rem" }}
              key={itinerary.id}
            >
              <Card.Header as="h5">{itinerary.name}</Card.Header>
              <Card.Body>
                <form>
                  <Card.Title>{itinerary.location}</Card.Title>
                  <Card.Text>
                    {new Date(itinerary.start_date).toLocaleDateString()} to{" "}
                    {new Date(itinerary.end_date).toLocaleDateString()}
                  </Card.Text>
                  <Button onClick={() => deleteItinerary(itinerary.id)}>delete</Button>
                </form>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default Itineraries;
