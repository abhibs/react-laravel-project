import React from "react";
import PageTop from "./components/PageTop/PageTop";
import Homepage from "./pages/Homepage";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AboutDescription from "./components/AboutDescription/AboutDescription";

function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <TopNavigation />
      <PageTop />
      <AboutDescription />
    </div>
  );
}

export default App;
