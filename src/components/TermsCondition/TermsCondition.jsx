import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
class TermsCondition extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h1 className="serviceName">Terms And Condition</h1>
              <hr />
              <p className="serviceDescription">
                <b> Comments </b> <br></br>
                When visitors leave comments on the site we collect the data
                shown in the comments form, and also the visitor’s IP address
                and browser user agent string to help spam detection.<br></br>
                <br></br>
                An anonymized string created from your email address (also
                called a hash) may be provided to the Gravatar service to see if
                you are using it. The Gravatar service privacy policy is
                available here: https://automattic.com/privacy/. After approval
                of your comment, your profile picture is visible to the public
                in the context of your comment.
                <br></br>
                <br></br>
                <b>Media</b> <br></br>
                If you upload images to the website, you should avoid uploading
                images with embedded location data (EXIF GPS) included. Visitors
                to the website can download and extract any location data from
                images on the website.
                <br></br>
                <b>Contact forms</b> <br></br>
                We may use contact form submission information to get in touch
                with you. We do not use the information submitted through
                contact form for marketing purposes
                <br></br>
                <br></br>
                <b>Embedded content from other websites</b> <br></br>
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
                <br></br>
                <br></br>
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracing your interaction
                with the embedded content if you have an account and are logged
                in to that website.
                <br></br>
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TermsCondition;
