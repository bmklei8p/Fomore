import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useGetTokenQuery, useLogOutMutation } from "../app/accountApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal, LOG_IN_MODAL, SIGN_UP_MODAL } from "../app/accountSlice";
import LogInModal from "./Misc/LogInModal";
import SignUpModal from "./Misc/SignUpModal";
import { useEffect } from "react";
import logo from "../media/fomore-dark.png";
import { NavLink } from "react-bootstrap";
import { updateItinerary } from "../app/itinerarySlice";
import { GuestLoginButton } from "./Misc/GuestLoginButton";

function LoginButtons(props) {
  const dispatch = useDispatch();
  const classNames = `buttons ${props.show ? "" : "is-hidden"}`;

  return (
    <div className={classNames}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "1rem",
          alignItems: "center",
        }}
      >
        <GuestLoginButton displayType={false} />
        <button
          onClick={() => dispatch(showModal(SIGN_UP_MODAL))}
          className="button is-primary"
        >
          <strong>Sign up</strong>
        </button>
        <button
          onClick={() => dispatch(showModal(LOG_IN_MODAL))}
          className="button is-light"
        >
          <strong>Log in</strong>
        </button>
      </div>
    </div>
  );
}

function LogoutButton() {
  const navigate = useNavigate();
  const [logOut, { data }] = useLogOutMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const actionId = updateItinerary({ itineraryId: "" });
    dispatch(actionId);
    if (data) {
      navigate("/");
    }
  });

  return (
    <div className="buttons">
      <button onClick={logOut} className="button is-light">
        Log out
      </button>
    </div>
  );
}

function FomoreNav() {
  const { data: token, isLoading: tokenLoading } = useGetTokenQuery();

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink href="/" className="nav-logo">
            <img alt="logo" src={logo}></img>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {token ? (
                <>
                  <Nav.Link href="/ItineraryForm">Create Itinerary</Nav.Link>
                  <Nav.Link href="/EventForm">Create Event</Nav.Link>
                  <Nav.Link href="/Itineraries">My Itineraries</Nav.Link>
                </>
              ) : (
                <p className="d-none"></p>
              )}
            </Nav>
            <div className="navbar-end">
              <div className="navbar-item">
                {tokenLoading ? (
                  <LoginButtons show={false} />
                ) : token ? (
                  <LogoutButton />
                ) : (
                  <LoginButtons show={true} />
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LogInModal />
      <SignUpModal />
    </>
  );
}

export default FomoreNav;
