import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class PageTop extends Component {
  render() {
    return (
      <>
        <Container fluid={true} className="topFixedPage">
          <Row>
            <Col className="text-center topContentPage">
              <h1 className="topTitlePage">{this.props.pagetitle}</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default PageTop;
