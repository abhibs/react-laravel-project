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
              <p className="text-justify serviceDescription">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                libero placeat tenetur consectetur omnis dolore quia cupiditate
                accusamus vitae nihil. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nihil, debitis delectus placeat inventore
                expedita dolorum dolor amet error fuga nesciunt?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                excepturi debitis ratione quas praesentium odio. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Placeat debitis
                ipsum culpa cupiditate magnam commodi eius tenetur error laborum
                est!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores numquam ipsum nisi, tempore molestiae quibusdam beatae,
                harum tempora praesentium nesciunt error labore aliquid
                temporibus maxime. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Quasi facilis rem minus quaerat velit esse
                possimus aut, molestias non repudiandae.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Analysis;
