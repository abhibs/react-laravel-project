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
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeBody">
                <h2 className="aboutMeDetails">HI There, I'm</h2>
                <h2 className="aboutMeTitle">Abhiram</h2>
                <h3 className="aboutMeDetails">
                  Work as <span id="myElement"> Full Stack Web Developer </span>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutMe;
