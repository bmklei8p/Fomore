import { Card, Button, Form } from "react-bootstrap";
import { useGetEventsQuery } from "../../app/eventApi";
import ItinerarySelect from "./ItinerarySelect";
import { useSelector } from "react-redux";

function ItineraryList() {
  const { data, isLoading } = useGetEventsQuery();
  const { itineraryId } = useSelector((state) => state.itinerary);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      <ItinerarySelect />
      {data.events
        .filter((event) => event.itinerary_id === itineraryId)
        .map((event) => {
          return (
            <Card
              key={event.id}
              className="item-border"
              style={{ width: "25rem" }}
            >
              <Card.Header as="h6">
                {event.name}{" "}
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{ float: "right" }}
                >
                  Go to event
                </Button>
              </Card.Header>
              <Card.Body>
                <Card.Text>Location: {event.location}</Card.Text>
                <Card.Text>
                  Dates: {new Date(event.start_date).toLocaleDateString()} to{" "}
                  {new Date(event.end_date).toLocaleDateString()}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default ItineraryList;
