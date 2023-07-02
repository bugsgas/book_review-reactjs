import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./index.css";

export default function Header() {
  return (
    // <Navbar collapseOnSelect expand="lg" className=" header">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <Image src="../src/assets/ReviewBook.svg"></Image>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Form className="search-bar justify-content-center flex-grow-1 d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Find the book you are looking for"
    //           className="search-color me-2"
    //           aria-label="Search"
    //         />
    //       </Form>
    //       <Nav>
    //         <Nav.Link href="#action1">
    //           <Image src="../src/assets/Vector.svg"></Image>
    //         </Nav.Link>
    //         <Nav.Link className="notif" href="#action2">
    //           <span class="dot">1</span>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //       </Container>
    // </Navbar>
    <div className="header">
      <Container>
        {["sm"].map((expand) => (
          <Navbar key={expand} expand={expand} className=" mb-3">
            <Container fluid>
              <Navbar.Brand href="#">
                <Image src="../src/assets/ReviewBook.svg"></Image>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Form className="search-bar justify-content-center flex-grow-1 d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Find the book you are looking for"
                      className="search-color me-2"
                      aria-label="Search"
                    />
                  </Form>
                  <Nav className="justify-content-end pe-3">
                    <Nav.Link href="#action1">
                      <Image src="../src/assets/Vector.svg"></Image>
                    </Nav.Link>
                    <Nav.Link className="notif" href="#action2">
                      <span class="dot">1</span>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </Container>
    </div>
  );
}
