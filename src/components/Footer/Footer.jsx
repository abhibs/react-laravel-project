import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-center">
              <h2 className="footerName text-center">Follow Us </h2>
              <div className="social-container">
                <a href="#" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="#" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Address </h2>
              <p className="footerDescription">
                Javalli Tudoor Thirthahalli Shimoga Karnataka 577226
                <br></br>
                <FontAwesomeIcon icon={faEnvelope} /> Email :
                abhirambs97@gmail.com
                <br></br>
                <FontAwesomeIcon icon={faPhone} /> Phone : 948117822<br></br>
              </p>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Information </h2>
              <a className="footerLink" href="#">
                About Me
              </a>
              <br></br>
              <a className="footerLink" href="#">
                Company Profile
              </a>
              <br></br>
              <a className="footerLink" href="#">
                Contact Us
              </a>
              <br></br>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName text-center">Policy </h2>
              <a className="footerLink" href="#">
                Fefund Policy
              </a>
              <br></br>
              <a className="footerLink" href="#">
                Trems And Condition
              </a>
              <br></br>
              <a className="footerLink" href="#">
                Privaci Policy
              </a>
              <br></br>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Footer;
