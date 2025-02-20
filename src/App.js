import React from "react";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import PageTop from "./components/PageTop/PageTop";
import AllProjects from "./components/AllProjects/AllProjects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <TopNavigation />
      <PageTop pagetitle="All Project" />
      <AllProjects />
      <Footer />
    </div>
  );
}

export default App;
