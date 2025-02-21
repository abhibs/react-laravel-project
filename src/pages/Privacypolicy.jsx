import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import Footer from "../components/Footer/Footer";

class Privacypolicy extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Abhiram / Privacy Policy" />
        <PageTop pagetitle="Privacy Policy" />
        <PrivacyPolicy />
        <Footer />
      </>
    );
  }
}

export default Privacypolicy;
