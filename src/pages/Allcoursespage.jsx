import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";

class Allcoursespage extends Component {
  render() {
    return (
      <>
        <TopNavigation />
        <PageTop pagetitle="All Courses" />
        <AllCourses />
        <Footer />
      </>
    );
  }
}

export default Allcoursespage;
