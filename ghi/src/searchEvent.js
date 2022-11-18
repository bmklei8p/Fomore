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
    const url = "http://localhost:8000/api/restaurant_search/?location=Chicago&date=2022-11-18T18%3A43%3A56.706Z&itinerary_id=12343a8014829a865bbf700d";

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
                  <td>{restaurant.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RestaurantList;
