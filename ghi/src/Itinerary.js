import React from "react";
import { useGetItinerariesQuery } from "./app/itineraryApi";
import ErrorNotification from "./ErrorNotification";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function ItineraryList() {
  const { data, error, isLoading } = useGetItinerariesQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }
  console.log({data})

  return (
    //     <div className="columns is-centered">
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
            // border="light"
            style={{ width: "25rem" }}
          >
            <Card.Header as="h6">{itinerary.name} <Button variant="outline-primary" size="sm" style={{ float: "right" }}>Go to Itinerary</Button></Card.Header>
            <Card.Body>
              <Card.Text>Location: {itinerary.location}</Card.Text>
              <Card.Text>Dates: {new Date(itinerary.start_date).toLocaleDateString()} to {new Date(itinerary.end_date).toLocaleDateString()}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default ItineraryList;
