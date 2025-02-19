import React from "react";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AllCourses from "./components/AllCourses/AllCourses";
import PageTop from "./components/PageTop/PageTop";

function App() {
  return (
    <div>
      <TopNavigation />
      <PageTop />
      <AllCourses />
    </div>
  );
}

export default App;
