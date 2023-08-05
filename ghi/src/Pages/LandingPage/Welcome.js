import { GuestLoginButton } from "../../Features/Misc/GuestLoginButton";
import { useDispatch } from "react-redux";
import { showModal, SIGN_UP_MODAL } from "../../app/accountSlice";
import { useNavigate } from "react-router-dom";
import { useGetTokenQuery } from "../../app/accountApi";

function Welcome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: token, isLoading: tokenLoading } = useGetTokenQuery();
  if (token && !tokenLoading) navigate("/main");

  return (
    <div
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginInline: "auto",
        fontWeight: "bold",
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
      <p style={{ marginTop: "1rem", fontSize: "1.5rem", color: "white" }}>
        Welcome to FOMORE! The quickest way manage itineraries
      </p>
      <p style={{ fontSize: "1.5rem", color: "white" }}>
        To get started, sign up or log in, and create your first itinerary
      </p>
      <p style={{ fontSize: "1.5rem", color: "white" }}>
        Search events or create your own
      </p>
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
