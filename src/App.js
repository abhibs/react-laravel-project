import React from "react";
import PageTop from "./components/PageTop/PageTop";
import Homepage from "./pages/Homepage";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AboutDescription from "./components/AboutDescription/AboutDescription";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <TopNavigation />
      <PageTop pagetitle="About Us" />
      <AboutMe />
      <AboutDescription />
      <Footer />
    </div>
  );
}

export default App;
