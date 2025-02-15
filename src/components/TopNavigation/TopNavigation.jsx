import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import whiteLogo from "../../assets/images/logo_white.png";
import blackLogo from "../../assets/images/logo_black.png";
import "../../assets/css/custom.css";
import "../../assets/css/bootstrap.min.css";

class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      // navBarTitle: "navTitle",
      navBarLogo: [whiteLogo],
      navBarBack: "navBackground",
      navBarItem: "navItem",
      navVariant: "dark",
    };
  }
  onScroll = () => {
    if (window.scrollY > 100) {
      // this.setState({ navBarTitle: "navTitleScroll" });
      this.setState({
        navBarLogo: [blackLogo],
        navBarBack: "navBackgroundScroll",
        navBarItem: "navItemScroll",
        navVariant: "light",
      });
    } else if (window.scrollY < 100) {
      // this.setState({ navBarTitle: "navTitle" });
      this.setState({
        navBarLogo: [whiteLogo],
        navBarBack: "navBackground",
        navBarItem: "navItem",
        navVariant: "dark",
      });
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
          // bg="dark"
          variant={this.state.navVariant}
          className={this.state.navBarBack}
        >
          <Navbar.Brand href="#home">
            <img src={this.state.navBarLogo} alt="Company Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                HOME
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                ABOUT
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                SERVICE
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                COURSES
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link className={this.state.navBarItem} href="#deets">
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default TopNavigation;
