import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../assets/images/design.png';
import ecommerceIcon from '../../assets/images/ecommerce.png';
import webIcon from '../../assets/images/web.png';

class Services extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div>
                            <img src={ecommerceIcon} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div>
                            <img src={designIcon} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div>
                            <img src={webIcon} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Services