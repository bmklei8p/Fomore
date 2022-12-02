import { Card } from "react-bootstrap";
import { useGetEventsQuery, useDeleteEventMutation } from "../../app/eventApi";
import ItinerarySelect from "./ItinerarySelect";
import { useSelector } from "react-redux";

function ItineraryList() {
  const [deleteEvent] = useDeleteEventMutation();
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
          console.log(data)
          return (
            <Card
              key={event.id}
              className="item-border"
              style={{ width: "25rem" }}
            >
              <Card.Header as="h6">
                {event.name}{" "}
                    <button className="btn btn-outline-primary btn-sm float-end" onClick={() => deleteEvent(event.id)}>
                      Remove
                    </button>
              </Card.Header>
              <Card.Body>
                <Card.Text>Location: {event.location}</Card.Text>
                <Card.Text>
                  Date: {new Date(event.date).toLocaleDateString()}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default ItineraryList;
// dates need to be fixed
