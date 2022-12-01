import {
  useGetItinerariesQuery,
  useDeleteItineraryMutation,
} from "../../app/itineraryApi";
import Card from "react-bootstrap/Card";
import { useGetTokenQuery } from "../../app/accountApi";


function Itineraries() {
  const { data: tokenData } = useGetTokenQuery();
  const accountId = tokenData && tokenData.account && tokenData.account.id;
  const [deleteItinerary] = useDeleteItineraryMutation();
  const { data, error, isLoading } = useGetItinerariesQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      <form>
        {data.itineraries.filter(itinerary => itinerary.account_id === accountId).map((itinerary) => (
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
            </Card.Body>
          </Card>
        ))}
      </form>
    </div>
  );
}

export default Itineraries;
