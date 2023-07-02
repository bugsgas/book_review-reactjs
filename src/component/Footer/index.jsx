import "bootstrap/dist/css/bootstrap.min.css";
import "../Footer/index.css";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Button, Image, Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="">
        <Row>
          <Col md={6} xs={12}>
            <div className="">
              <Image src="../src/assets/LogoFoot.png"></Image>
              <p style={{ paddingTop: "16px" }}>
                Is the best place to review a book
              </p>
            </div>
          </Col>

          <Col md={3} xs={6}>
            <div>
              <h5>Navigation</h5>
              <p>Home</p>
              <p>Bestseller</p>
              <p>Category</p>
              <p>Community</p>
              <p>Blog</p>
            </div>
          </Col>
          <Col md={3} xs={6}>
            <h5>Company</h5>
            <p>admin@reviewbook.com</p>
            <p>Jln. Stiabudhi No. 193</p>
            <p>Bandung Indonesia</p>
          </Col>
        </Row>
        <Row style={{ paddingTop: "45px" }}>
          <Col sm={6}>
            <p>© 2021 ReviewBook. All rights reserved.</p>
          </Col>
          <Col
            sm={6}
            className="d-flex justify-content-lg-end justify-content-sm-start
"
          >
            <Nav.Link href="#action1" style={{ paddingRight: "15px" }}>
              <Image src="../src/assets/instagram.png"></Image>
            </Nav.Link>
            <Nav.Link href="#action1">
              <Image src="../src/assets/facebook.png"></Image>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
