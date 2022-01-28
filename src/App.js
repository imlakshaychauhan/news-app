import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
// api key : a868dda091b54eef936f89e86a82985d

export default class App extends Component {
  
  pageSize = 6;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={this.pageSize} country="in" category="general" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={this.pageSize} country="in" category="business" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={this.pageSize} country="in" category="health" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={this.pageSize} country="in" category="sports" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={this.pageSize} country="in" category="science" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={this.pageSize} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
