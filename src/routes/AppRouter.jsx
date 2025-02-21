import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Services from "../pages/Services";
import Allcoursespage from "../pages/Allcoursespage";
import Allprojectpage from "../pages/Allprojectpage";
import Aboutpage from "../pages/Aboutpage";
import Contactpage from "../pages/Contactpage";
import Homepage from "../pages/Homepage";
import Refundpolicy from "../pages/Refundpolicy";

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
        </Switch>
      </>
    );
  }
}

export default AppRouter;
