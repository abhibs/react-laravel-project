import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../assets/images/design.png';
import ecommerceIcon from '../../assets/images/ecommerce.png';
import webIcon from '../../assets/images/web.png';
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'

class Services extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div>
                            <img className="ecommerceIcon" src={ecommerceIcon} alt="" />
                            <h2>Ecommerce</h2>
                            <p>I will design and develop ecommerce online store website.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div>
                            <img className="designIcon" src={designIcon} alt="" />
                            <h2>Web Design</h2>
                            <p>Qualified web design and attractive effects which catches visitor’s Eye.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div>
                            <img className="webIcon" src={webIcon} alt="" />
                            <h2>Web Development</h2>
                            <p>Clean and fresh issue free code to make your website dynamic perfectly.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Services