import React, { Component } from 'react'
import { Container, Row, Button, Col } from 'react-bootstrap'
import '../../assets/css/custom.css'
import '../../assets/css/bootstrap.min.css'


class TopBanner extends Component {
  render() {
    return (
        <>
            <Container fluid={true} className="topFixedBanner">
                {/* <div className="topBannerOverlay"> */}
                    {/* <Container fluid={true} className="topContent"> */}
                        <Row>
                            <Col className="text-center topContent">
                                <h1 className="topTitle">Abhiram B S</h1>
                                <h4 className="topSubTitle">Learn Profesionally</h4>
                                <Button variant="primary">Learn More</Button>
                            </Col>
                        </Row>
                    {/* </Container> */}
                {/* </div> */}
            </Container>
        </>
    )
  }
}


export default TopBanner