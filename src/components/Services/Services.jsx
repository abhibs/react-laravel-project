import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Services extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <h1>One</h1>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h1>Two</h1>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h1>Three</h1>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Services