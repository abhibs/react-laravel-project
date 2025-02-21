import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import TermsCondition from "../components/TermsCondition/TermsCondition";
import Footer from "../components/Footer/Footer";

class Termscondition extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Abhiram / Terms Condition" />
        <PageTop pagetitle="Terms and Condition" />
        <TermsCondition />
        <Footer />
      </>
    );
  }
}

export default Termscondition;
