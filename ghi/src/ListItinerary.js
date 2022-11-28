import { useGetItinerariesQuery } from "./app/itineraryApi";
import ErrorNotification from "./ErrorNotification";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Itineraries() {
  const { data, error, isLoading } = useGetItinerariesQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    // <div className="columns is-centered">
    //   <div className="column is-narrow">
    //     <ErrorNotification error={error} />
    //     <table className="table is-striped">
    //       <thead>
    //         <tr>
    //           <th>Name</th>
    //           <th>Start Date</th>
    //           <th>End Date</th>
    //           <th>Location</th>
    //           <th>account_id</th>
    //           <th>id</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.itineraries.map(itinerary => (
    //           <tr key={itinerary.id}>
    //             <td>
    //               {itinerary.name}
    //             </td>
    //             <td className="has-text-centered">
    //               {itinerary.start_date}
    //             </td>
    //             <td>
    //               {itinerary.end_date}
    //             </td>
    //             <td>
    //               {itinerary.location}
    //             </td>
    //             <td>
    //               {itinerary.account_id}
    //             </td>
    //             <td>
    //               {itinerary.id}
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div>
      {data.itineraries.map((itinerary) => {
        return (
          <Card
            className="item-border"
            border="light"
            style={{ width: "40rem" }}
          >
            <Card.Header as="h5">itinerary.name</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Itineraries;
