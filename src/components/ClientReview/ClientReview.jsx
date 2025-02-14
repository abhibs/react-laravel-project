import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import client1 from "../../assets/images/client1.avif";

export class ClientReview extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="siderBack text-center">
          <h1 className="reviewMainTitle p-3">TESTIMOIAL</h1>
          <div className="reviewbottom"></div>
          <Row className="text-center justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <img className="circleImg" src={client1} />
              <h2 className="reviewName">Kazi Ariyan</h2>
              <p className="reviewDescription">
                Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for
                teaching I am a founder of eLe easy Learning and a passionate
                Web Developer, Programmer & Instructor.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ClientReview;
