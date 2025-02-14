import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../assets/images/face.png";

class AboutMe extends Component {
  render() {
    return (
      <>
        <Container className="text-center">
          <h1 className="serviceMainTitle">ABOUT ME</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeImage">
                <img className="aboutImg" src={face} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutMe;
