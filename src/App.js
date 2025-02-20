import React from "react";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AllCourses from "./components/AllCourses/AllCourses";
import PageTop from "./components/PageTop/PageTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <TopNavigation />
      <PageTop pagetitle="All Courses" />
      <AllCourses />
      <Footer />
    </div>
  );
}

export default App;
