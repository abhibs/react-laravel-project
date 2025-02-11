import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle",
    };
  }
  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ navBarTitle: "navTitleScroll" });
    } else if (window.scrollY < 100) {
      this.setState({ navBarTitle: "navTitle" });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand className={this.state.navBarTitle} href="#home">
            EASY LEARNING
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">HOME</Nav.Link>
              <Nav.Link href="#deets">ABOUT</Nav.Link>
              <Nav.Link href="#deets">SERVICE</Nav.Link>
              <Nav.Link href="#deets">COURSES</Nav.Link>
              <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
              <Nav.Link href="#deets">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default TopNavigation;
