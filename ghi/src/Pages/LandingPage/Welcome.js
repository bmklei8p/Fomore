import { GuestLoginButton } from "../../Features/Misc/GuestLoginButton";
import { useDispatch } from "react-redux";
import { showModal, SIGN_UP_MODAL } from "../../app/accountSlice";

function Welcome() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginInline: "auto",
      }}
      className="Welcome-content"
    >
      <h1
        style={{
          fontSize: "5rem",
          marginTop: "3rem",
          display: "flex",
          flexDirection: "row",
          letterSpacing: "-0.3rem",
        }}
      >
        <p style={{ color: "#33cccc" }}>FOMO</p>
        <p style={{ color: "#99ffff" }}>RE</p>
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.5rem" }}>
        Welcome to FOMORE! The quickest way manage itineraries
      </p>
      <p style={{ fontSize: "1.5rem" }}>
        To get started, sign up or log in, and create your first itinerary
      </p>
      <p style={{ fontSize: "1.5rem" }}>Search events or create your own</p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <GuestLoginButton displayType={true} />
        <button
          style={{ fontWeight: "bold" }}
          onClick={() => dispatch(showModal(SIGN_UP_MODAL))}
          className="_sign-up-button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Welcome;
