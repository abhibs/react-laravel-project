import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class RecentProject extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <h1>One</h1>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h1>Two</h1>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h1>Three</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default RecentProject;
