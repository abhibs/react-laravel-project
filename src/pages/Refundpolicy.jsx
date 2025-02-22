import React, { Component } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy";
import Footer from "../components/Footer/Footer";

class Refundpolicy extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <TopNavigation title="Abhiram / Refund Policy" />
        <PageTop pagetitle="Refund Policy" />
        <RefundPolicy />
        <Footer />
      </>
    );
  }
}

export default Refundpolicy;
