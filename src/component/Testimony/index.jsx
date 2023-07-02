import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import { Button, Image, Container, Row, Col } from "react-bootstrap";

export default function Testimony() {
  return (
    <div style={{ padding: "120px 0px" }}>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={4} sm={12}>
            <Card
              variant="outlined"
              sx={{
                maxWidth: 516,
                background: "#ffffff",
                border: 3,
                borderColor: "#B4D51E",
                borderRadius: "16px",
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="./src/assets/potrait3.jpeg"
                />
                <CardContent
                  className="text-center"
                  style={{ paddingTop: "30px" }}
                >
                  <h3>Joe Biden</h3>
                  <p>
                    I feel very helpful with all the books provided, so I do my
                    job easily and happily
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Image className="quotes" src="./src/assets/quote.png"></Image>
          </Col>

          <Col md={4} sm={12}>
            <Card
              variant="outlined"
              sx={{
                maxWidth: 516,
                background: "#ffffff",
                border: 3,
                borderColor: "#B4D51E",
                borderRadius: "16px",
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="./src/assets/potrait3.jpeg"
                />
                <CardContent
                  className="text-center"
                  style={{ paddingTop: "30px" }}
                >
                  <h3>Joe Biden</h3>
                  <p>
                    I feel very helpful with all the books provided, so I do my
                    job easily and happily
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Image className="quotes" src="./src/assets/quote.png"></Image>
          </Col>

          <Col md={4} sm={12}>
            <Card
              variant="outlined"
              sx={{
                maxWidth: 516,
                background: "#ffffff",
                border: 3,
                borderColor: "#B4D51E",
                borderRadius: "16px",
                boxShadow: 3,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="./src/assets/potrait3.jpeg"
                />
                <CardContent
                  className="text-center"
                  style={{ paddingTop: "30px" }}
                >
                  <h3>Joe Biden</h3>
                  <p>
                    I feel very helpful with all the books provided, so I do my
                    job easily and happily
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <Image className="quotes" src="./src/assets/quote.png"></Image>
          </Col>
          {/* <Card
              className="testicard"
              sx={{
                display: "flex",
                maxWidth: 416,
                background: "#fbf4e2",
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 220 }}
                image="./src/assets/potrait1.jpeg"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <h3>Joe Biden</h3>
                  <p>
                    I feel very helpful with all the books provided, so I do my
                    job easily and happily
                  </p>
                </CardContent>
              </Box>
            </Card> */}
        </Row>
      </Container>
    </div>
  );
}
