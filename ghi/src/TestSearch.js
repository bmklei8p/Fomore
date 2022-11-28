import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { addArticle } from './articleSlice';
import { updateSearch } from './app/searchSlice';
import { useGetRestaurantsQuery } from './app/restaurantApi';


export function Search() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const search = useSelector(state => state);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetRestaurantsQuery(search.search);
  if (isLoading) {
    return (
      <progress className="progress is-primary" max="100"></progress>
    );
  }
  //console.log(search.search)
  //console.log(data)

  function handleSubmit() {
    const action = updateSearch({location: location, date: date});
    dispatch(action);
    setLocation('');
    setDate('');
  }

  return (
    <div>
    <div>
      <input value={location}
             onChange={e => setLocation(e.target.value)} />
      <input type="date"
             value={date}
             onChange={e => setDate(e.target.value)} />
      <button onClick={handleSubmit}>
        Add location and date to search
      </button>
    </div>
    <div className="columns is-centered">
      <div className="column is-narrow">
        <table className="table is-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Date</th>
              <th>Itinerary ID</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map(restaurant => (
              <tr key={restaurant.id}>
                <td>
                  {restaurant.name}
                </td>
                <td>
                  {restaurant.location}
                </td>
                <td className="has-text-centered">
                  {restaurant.date}
                </td>
                <td>
                  {restaurant.itinerary_id}
                </td>
                <td>
                  {restaurant.address}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>

  );
}

export default Search;
