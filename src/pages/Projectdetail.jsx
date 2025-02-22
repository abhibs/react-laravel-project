import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail";
import Footer from "../components/Footer/Footer";

class Projectdetail extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <TopNavigation title="Project Details" />
        <PageTop pagetitle="Project Details" />
        <ProjectDetail />
        <Footer />
      </>
    );
  }
}

export default Projectdetail;
