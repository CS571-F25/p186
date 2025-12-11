import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SiteNavbar() {
  return (
    <Navbar
      expand="md"
      variant="dark"
      style={{ backgroundColor: "#c5050c" }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Madison Bites
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/browse">
              Browse Dishes
            </Nav.Link>
            <Nav.Link as={NavLink} to="/submit">
              Submit Review
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}