import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Services from "../pages/Services";
import Allcoursespage from "../pages/Allcoursespage";
import Allprojectpage from "../pages/Allprojectpage";
import Aboutpage from "../pages/Aboutpage";
import Contactpage from "../pages/Contactpage";
import Homepage from "../pages/Homepage";
import Refundpolicy from "../pages/Refundpolicy";
import Termscondition from "../pages/Termscondition";
import Privacypolicy from "../pages/Privacypolicy";
import Projectdetail from "../pages/Projectdetail";
import Coursedetail from "../pages/Coursedetail";

class AppRouter extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/service" component={Services} />
          <Route exact path="/course" component={Allcoursespage} />
          <Route exact path="/porfolio" component={Allprojectpage} />
          <Route exact path="/about" component={Aboutpage} />
          <Route exact path="/contact" component={Contactpage} />
          <Route exact path="/refund/policy" component={Refundpolicy} />
          <Route exact path="/terms/condition" component={Termscondition} />
          <Route exact path="/privacy/policy" component={Privacypolicy} />
          <Route exact path="/project/detail" component={Projectdetail} />
          <Route exact path="/course/detail" component={Coursedetail} />
        </Switch>
      </>
    );
  }
}

export default AppRouter;
