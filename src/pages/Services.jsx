import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Service from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

class Services extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Abhiram / Service Page"/>
        <PageTop pagetitle="All Services" />
        <Service />
        <Footer />
      </>
    );
  }
}

export default Services;
