import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class ContactSec extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1>Quick Connect</h1>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1>Discuss Now</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ContactSec;
