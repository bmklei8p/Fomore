
import { useGetItinerariesQuery } from "../../app/itineraryApi";
import Form from 'react-bootstrap/Form';
import { useState } from "react";


function ItinerarySelect() {
    const options = [
        {value: ''},
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

function ItineraryList() {
    const { data, error, isLoading } = useGetEventsQuery();
    if (isLoading) {
        return <progress className="progress is-primary" max="100"></progress>;
    }
    return (
    <>
        <ItinerarySelect/>
        {data.events.map((event) => {
            if (event.itinerary_id == "63755aa26282cfade5af40f9") {
            return (
            <Card
                key={event.itinerary_id}
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
    }})}
    </>