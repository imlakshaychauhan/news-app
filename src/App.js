import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  
  pageSize = 6;
  newskey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={this.pageSize} newskey={this.newskey} country="in" category="general" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={this.pageSize} newskey={this.newskey} country="in" category="entertainment" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={this.pageSize} newskey={this.newskey} country="in" category="business" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={this.pageSize} newskey={this.newskey} country="in" category="health" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={this.pageSize} newskey={this.newskey} country="in" category="sports" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={this.pageSize} newskey={this.newskey} country="in" category="science" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={this.pageSize} newskey={this.newskey} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
