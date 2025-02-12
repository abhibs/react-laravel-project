import React, { Component } from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import projectOne from "../../assets/images/project1.avif";
import projectTwo from "../../assets/images/project2.avif";
import projectThree from "../../assets/images/project3.avif";

class RecentProject extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img variant="top" src={projectOne} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img variant="top" src={projectTwo} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Img variant="top" src={projectThree} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default RecentProject;
