import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Navigation() {
  return (
    <div className="nav-menu">
      <Container>
        <Nav
          className="justify-content-center flex-grow-1"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link className="nav-list" href="#action1">
            Home
          </Nav.Link>
          <Nav.Link className="nav-list" href="#action2">
            Bestseller
          </Nav.Link>
          <Nav.Link className="nav-list" href="#action1">
            Category
          </Nav.Link>
          <Nav.Link className="nav-list" href="#action2">
            Community
          </Nav.Link>
          <Nav.Link className="nav-list" href="#action1">
            Blog
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}
