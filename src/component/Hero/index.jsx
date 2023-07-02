import "bootstrap/dist/css/bootstrap.min.css";
import "../Hero/index.css";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Button, Image, Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="hero">
      <Container>
        <Row fluid className="hero-bg">
          <div className="head-text">
            <h1>Book is a window to the world</h1>
            <p>wake up your dream by reading a book every day</p>
            <Button className="head-button">Read Now</Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}
