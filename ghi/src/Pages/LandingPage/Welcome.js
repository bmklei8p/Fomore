import logo from "../../media/fomore-dark.png";

function Welcome() {
  return (
    <div
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginInline: "auto",
      }}
      className="Welcome-content"
    >
      <h1 style={{ fontSize: "4rem", marginTop: "2rem" }}>Fomore</h1>
      <p>Welcome to FOMORE! The quickest way manage your itineraries.</p>
      <p>To get started, sign up or log in, and create your first itinerary.</p>
      <p>Search events or create your own, and add them to your itinerary.</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{ backgroundColor: "darkgreen" }}
          className="btn btn-primary  btn-lg"
        >
          Explore as guest
        </button>
        <button
          style={{ backgroundColor: "darkgreen" }}
          className="btn btn-primary btn-lg"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Welcome;
