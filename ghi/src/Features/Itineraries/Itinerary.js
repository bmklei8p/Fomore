import React from "react";
import { useGetEventsQuery } from "../../app/eventApi";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ItinerarySelect from "./ItinerarySelect";

function ItineraryList() {
  const { data, error, isLoading } = useGetEventsQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }
  return (
    <div>
      <ItinerarySelect />
      {data.events.map((event) => {
        if (event.itinerary_id == "12343a8014829a865bbf700d") {
          return (
            <Card
              key={event.itinerary_id}
              className="item-border"
              // border="light"
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
        }
      })}
    </div>
  );
}
export default ItineraryList;
