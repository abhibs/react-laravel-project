import React, { Component } from "react";
import ContactSec from "../components/ContactSec/ContactSec";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";

class Contactpage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Abhiram / Contact Page" />
        <PageTop pagetitle="Contact Us" />
        <ContactSec />
        <Footer />
      </>
    );
  }
}

export default Contactpage;
