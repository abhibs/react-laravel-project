import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Summury extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="summaryBanner text-center">
          <Row>
            <Col lg={8} md={6} sm={12} className="countSection">
              <Row>
                <Col>
                  <h1 className="countNumber">35000</h1>
                  <h4 className="countTitle">Students Worldwide</h4>
                </Col>
                <Col>
                  <h1 className="countNumber">22</h1>
                  <h4 className="countTitle">Courses Published</h4>
                </Col>
                <Col>
                  <h1 className="countNumber">3000</h1>
                  <h4 className="countTitle">Student Reviews</h4>
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
