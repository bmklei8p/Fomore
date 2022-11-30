import { Card, Button, Form } from "react-bootstrap";
import { useGetEventsQuery } from "../../app/eventApi";
import ItinerarySelect from "./ItinerarySelect";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ItineraryList() {
  const { data, isLoading } = useGetEventsQuery();
  const { itineraryId } = useSelector((state) => state.itinerary);
  //   const [changed, setChanged] = useState(false);
  //   const [localId, setLocalId] = useState("");
  console.log(itineraryId);
  //   setLocalId(itineraryId);
  //   useEffect(() => {
  //     setChanged(!changed);
  //   }, [itineraryId]);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <>
      <ItinerarySelect />
      {data.events.map((event) => {
        if (event.itinerary_id == { itineraryId }) {
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
        }
      })}
    </>
  );
}

export default ItineraryList;
