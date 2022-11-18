import React from "react";
import { Link } from "react-router-dom";

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }
  async componentDidMount() {
    // const url = "http://localhost:8100/api/models/";

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({ restaurants: data.restaurants });
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Category</th>
              <th>Venue</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id}>
                  <td>{restaurant.date}</td>
                  <td>{restaurant.location}</td>
                  <td>{restaurant.category}</td>
                  <td>{restaurant.venue}</td>
                  <td>{}</td>
                  <td>
                    <img style={{ width: 100 }} src={model.picture_url} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            to="/models/new"
            className="btn btn-outline-primary btn-lg px-4 gap-3"
          >
            Add a New Vehicle Model
          </Link>
        </div>
      </div>
    );
  }
}

export default VehicleModelsList;
