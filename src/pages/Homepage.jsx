import React, { Component } from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summury from "../components/Summary/Summury";
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

export class Homepage extends Component {
  render() {
    return (
      <>
        <TopNavigation />
        <TopBanner />
        <Services />
        <Analysis />
        <Summury />
        <RecentProject />
        <Courses />
        <Video />
        <ClientReview />
        <AboutMe />
        <Services />
        <Footer />
      </>
    );
  }
}

export default Homepage;
