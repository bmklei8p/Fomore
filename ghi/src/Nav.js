import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function FomoreNav() {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">FOMOre</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <NavDropdown title="Inventory" id="inventory" variant="dark">
              <NavDropdown.Item
                componentClass={NavLink}
                href="/manufacturers"
                to="/manufacturers"
                active={window.location.pathname === "/manufacturers"}
              >
                Manufacturers
              </NavDropdown.Item>
              <NavDropdown.Item
                componentClass={NavLink}
                href="/manufacturers/new"
                to="/manufacturers/new"
                active={window.location.pathname === "/manufacturers/new"}
              >
                New Manufacturer
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FomoreNav;
