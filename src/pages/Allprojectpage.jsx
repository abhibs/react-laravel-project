import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";

class Allprojectpage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Abhiram / Project Page"/>
        <PageTop pagetitle="All Project" />
        <AllProjects />
        <Footer />
      </>
    );
  }
}

export default Allprojectpage;
