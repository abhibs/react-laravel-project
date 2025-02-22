import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";

class Allcoursespage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <TopNavigation title="Abhiram / Course Page" />
        <PageTop pagetitle="All Courses" />
        <AllCourses />
        <Footer />
      </>
    );
  }
}

export default Allcoursespage;
