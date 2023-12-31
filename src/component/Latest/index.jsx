import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import * as React from "react";
import Rating from "@mui/material/Rating";

import { Card, Button, Image, Container, Row, Col } from "react-bootstrap";

export default function Popular({ booklist }) {
  return (
    <div style={{ paddingBottom: "60px" }}>
      <Container>
        <Row style={{ paddingBottom: "40px" }}>
          <h1>Latest Now</h1>
        </Row>
        <Row>
          {booklist.map((item) => (
            <Col xs={12} md={3} className="">
              <Card className="card" style={{ maxWidth: "17rem" }}>
                <div className="img-wrap">
                  <Card.Img
                    className="img-thumb my-auto"
                    variant="top"
                    src={item.thumbnail}
                  />
                </div>

                <Card.Body className="text-wrap">
                  <Rating
                    name="read-only"
                    value={item.rating}
                    sx={{
                      color: "#B4D51E",
                    }}
                    size="small"
                    readOnly
                  />
                  <Card.Title className="text-title">{item.title}</Card.Title>
                  <Card.Text>{item.author}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
