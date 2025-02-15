import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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

            <Col lg="3" md={6} sm={12}>
              <h2 className="footerName text-center">Address </h2>
            </Col>
            <Col lg="3" md={6} sm={12}>
              <h2 className="footerName text-center">Information </h2>
            </Col>
            <Col lg="3" md={6} sm={12}>
              <h2 className="footerName text-center">Policy </h2>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Footer;
