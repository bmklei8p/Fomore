import { useEffect, useState } from 'react';
import { useGetItinerariesQuery } from './app/yelpApi';
import ErrorNotification from './ErrorNotification';

function ItineraryTest() {
  const { data, error, isLoading } = useGetItinerariesQuery();
  console.log(data)
  if (isLoading) {
    return (
      <progress className="progress is-primary" max="100"></progress>
    );
  }

  return (
    <div className="columns is-centered">
      <div className="column is-narrow">
        <ErrorNotification error={error} />
        <table className="table is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Location</th>
              <th>account_id</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            {data.itineraries.map(itinerary => (
              <tr key={itinerary.id}>
                <td>
                  {itinerary.name}
                </td>
                <td className="has-text-centered">
                  {itinerary.start_date}
                </td>
                <td>
                  {itinerary.end_date}
                </td>
                <td>
                  {itinerary.location}
                </td>
                <td>
                  {itinerary.account_id}
                </td>
                <td>
                  {itinerary.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItineraryTest;
