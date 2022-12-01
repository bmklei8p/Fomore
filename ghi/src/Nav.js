import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from 'react-router-dom';
import { useGetTokenQuery, useLogOutMutation } from './app/accountApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showModal, LOG_IN_MODAL, SIGN_UP_MODAL } from './app/accountSlice';
import LogInModal from './Features/Misc/LogInModal';
import SignUpModal from './Features/Misc/SignUpModal';
import { useEffect } from 'react';

function LoginButtons(props) {
  const dispatch = useDispatch();
  const classNames = `buttons ${props.show ? '' : 'is-hidden'}`;

  return (
    <div className={classNames}>
      <button onClick={() => dispatch(showModal(SIGN_UP_MODAL))} className="button is-primary">
        <strong>Sign up</strong>
      </button>
      <button onClick={() => dispatch(showModal(LOG_IN_MODAL))} className="button is-light">
        Log in
      </button>
    </div>
  );
}

function LogoutButton() {
  const navigate = useNavigate();
  const [logOut, { data }] = useLogOutMutation();

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [data, navigate]);

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
  const { account: { roles = [] } } = token || {account: {}};

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">FOMORE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/ItineraryForm">Create Itinerary</Nav.Link>
              <Nav.Link href="/EventForm">Create Event</Nav.Link>
              <Nav.Link href="/Itineraries">My Itineraries</Nav.Link>
            </Nav>
            <div className="navbar-end">
              <div className="navbar-item">
                {tokenLoading
                  ? <LoginButtons show={false} />
                  : token
                    ? <LogoutButton />
                    : <LoginButtons show={true} />}
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
