import { useGetItinerariesQuery } from "../../app/itineraryApi";
import Form from "react-bootstrap/Form";
import { updateItinerary } from "../../app/itinerarySlice";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

function ItinerarySelect() {
  const [changed, setChanged] = useState(false);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetItinerariesQuery();

  useEffect(() => {
    const action = updateItinerary({ itineraryId: changed });
    dispatch(action);
  }, [changed]);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  // if (changed !== false) {
  //   const action = updateItinerary({ itineraryId: changed });
  //   dispatch(action);
  //   setChanged(false);
  // }

  return (
    <div>
      <Form.Select id="selectid" onChange={(e) => setChanged(e.target.value)}>
        <option>Select an Itinerary</option>
        {data.itineraries.map((itinerary) => {
          return (
            <option value={itinerary.id} key={itinerary.id}>
              {itinerary.name} in {itinerary.location} ({new Date(itinerary.start_date).toLocaleDateString()} to{" "}
                {new Date(itinerary.end_date).toLocaleDateString()})
            </option>
          );
        })}
        ;
      </Form.Select>
    </div>
  );
}

export default ItinerarySelect;
