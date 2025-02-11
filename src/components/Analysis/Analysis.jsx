import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Analysis extends Component {
  render() {
    return (
      <>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Technology Used</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <h1>Bar Chart</h1>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <h1>Text</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Analysis;
