import { GuestLoginButton } from "../../Features/Misc/GuestLoginButton";

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
      <h1 style={{ fontSize: "5rem", marginTop: "3rem" }}>Fomore</h1>
      <p style={{ marginTop: "2rem", fontSize: "1.5rem" }}>
        Welcome to FOMORE! The quickest way manage itineraries
      </p>
      <p style={{ fontSize: "1.5rem" }}>
        To get started, sign up or log in, and create your first itinerary
      </p>
      <p style={{ fontSize: "1.5rem" }}>Search events or create your own</p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <GuestLoginButton style={{ color: "white" }} />
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
