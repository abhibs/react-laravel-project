import React from "react";
import ContactSec from "./components/ContactSec/ContactSec";
import PageTop from "./components/PageTop/PageTop";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <TopNavigation />
      <PageTop pagetitle="Contact Us" />
      <ContactSec />
      <Footer />
    </div>
  );
}

export default App;
