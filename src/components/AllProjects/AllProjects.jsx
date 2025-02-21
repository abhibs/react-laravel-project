import React, { Component } from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import projectOne from "../../assets/images/project1.avif";
import projectTwo from "../../assets/images/project2.avif";
import projectThree from "../../assets/images/project3.avif";
import { Link } from "react-router-dom";

class AllProjects extends Component {
  render() {
    return (
      <>
        <Container className="text-center">
          <h1 className="serviceMainTitle">MY Project</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img variant="top" src={projectOne} />
                <Card.Body>
                  <Card.Title className="serviceName">Card Title</Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <Link className="link-style" to="/project/detail">
                      View More
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img variant="top" src={projectTwo} />
                <Card.Body>
                  <Card.Title className="serviceName">Card Title</Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <Link className="link-style" to="/project/detail">
                      View More
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img variant="top" src={projectThree} />
                <Card.Body>
                  <Card.Title className="serviceName">Card Title</Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <Link className="link-style" to="/project/detail">
                      View More
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AllProjects;
