import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";

import * as React from "react";
import Rating from "@mui/material/Rating";

import { Card, Button, Image, Container, Row, Col } from "react-bootstrap";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Popular() {
  const [bookList, setbookList] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    getDetailedData();
  }, []);

  const getDetailedData = () => {
    const api = `https://example-data.draftbit.com/books?_limit=4`;
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setbookList(res.data);
      })
      .catch((err) => {
        setErr(err.message);
      });
    errorState();
  };

  const errorState = () => {
    setTimeout(() => {
      setErr("");
    }, 4000);
  };

  return (
    <div style={{ paddingBottom: "60px" }}>
      <Container>
        <Row style={{ paddingBottom: "40px" }}>
          <h1>Popular Now</h1>
        </Row>
        <Row className="">
          {bookList.map((item) => (
            <Col xs={6} md={3} className="pt-lg-0 pt-sm-4">
              <Card className="card" style={{ maxWidth: "306px" }}>
                <div className="img-wrap">
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.image_url}
                  />
                </div>

                <Card.Body className="text-wrap">
                  <Rating
                    name="read-only"
                    value={item.rating}
                    precision={0.5}
                    sx={{
                      color: "#B4D51E",
                    }}
                    size="large"
                    readOnly
                  />
                  <Card.Title className="text-title">{item.title}</Card.Title>
                  <Card.Text>{item.authors}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
