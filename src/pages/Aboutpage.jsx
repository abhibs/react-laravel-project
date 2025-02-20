import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AboutMe from "../components/AboutMe/AboutMe";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";

class Aboutpage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Abhiram / About Page" />
        <PageTop pagetitle="About Us" />
        <AboutMe />
        <AboutDescription />
        <Footer />
      </>
    );
  }
}

export default Aboutpage;
