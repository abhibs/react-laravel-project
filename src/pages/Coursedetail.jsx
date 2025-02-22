import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import CourseDetail from "../components/CourseDetail/CourseDetail";
import Footer from "../components/Footer/Footer";

class Coursedetail extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <TopNavigation title="Abhiram / Course Detail" />
        <PageTop pagetitle="Course Detail" />
        <CourseDetail />
        <Footer />
      </>
    );
  }
}

export default Coursedetail;
