import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

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
              <Card className="workCard">
                <Card.Body>
                  <Card.Title className="cardTitle">
                    What I Have Achieved
                  </Card.Title>
                  <Card.Text>
                    <p className="cardSubTitle">
                      <FontAwesomeIcon
                        className="iconBullent"
                        icon={faCheckSquare}
                      />{" "}
                      Requirment Gathering
                    </p>
                    <p className="cardSubTitle">
                      <FontAwesomeIcon
                        className="iconBullent"
                        icon={faCheckSquare}
                      />{" "}
                      System Analysis
                    </p>
                    <p className="cardSubTitle">
                      <FontAwesomeIcon
                        className="iconBullent"
                        icon={faCheckSquare}
                      />{" "}
                      Coding Testing
                    </p>
                    <p className="cardSubTitle">
                      <FontAwesomeIcon
                        className="iconBullent"
                        icon={faCheckSquare}
                      />{" "}
                      Implementation
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Summury;
