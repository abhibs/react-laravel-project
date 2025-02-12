import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Summury extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="summaryBanner">
          <Row>
            <Col lg={8} md={6} sm={12}>
              <Row>
                <Col>
                  <h1>One</h1>
                </Col>
                <Col>
                  <h1>Two</h1>
                </Col>
                <Col>
                  <h1>Three</h1>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h1>Four</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Summury;
