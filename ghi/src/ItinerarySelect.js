import { useGetItinerariesQuery } from "./app/itineraryApi";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function ItinerarySelect() {
    const options = [
        {value: '', text: '--Choose an option--'},
        {value: 'apple', text: 'Apple 🍏'},
        {value: 'banana', text: 'Banana 🍌'},
        {value: 'kiwi', text: 'Kiwi 🥝'},
    ]

    const [selected, setSelected] = useState(options[0].value);

    const handleChange = e => {
        console.log(selected);
        setSelected(e.target.value);
    };

    const {data, error, isLoading} = useGetItinerariesQuery();
    if (isLoading) {
        return <progress className="progress is-primary" max="100"></progress>
    };
    return (
        <div>
            <Form.Select id="selectid" value={selected} onChange={handleChange}>
                <option>
                    Select an Itinerary
                </option>
                {data.itineraries.map((itinerary) => {
                return (
                <option value={itinerary.id} key={itinerary.id}>
                    {itinerary.name}
                </option>)})};
            </Form.Select>
        
        </div>
    )
}

export default ItinerarySelect;