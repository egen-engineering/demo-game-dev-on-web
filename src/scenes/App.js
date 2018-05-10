import React, { Component } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";

import One from "./1";
import Two from "./2";
import Three from "./3";
import Four from "./4";
import Five from "./5";
import Six from "./6";
import Seven from "./7";
import Eight from "./8";
import Nine from "./9";
import Ten from "./10";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">~ Game Development on the Web ~</h1>
          <h1>Egen Pong</h1>
        </header>

        <div className="App-body">
          <nav className="Nav">
            <NavLink to="/1">Initialize the canvas</NavLink>
            <NavLink to="/2">Draw the ball</NavLink>
            <NavLink to="/3">Make it move</NavLink>
            <NavLink to="/4">Detect collisions</NavLink>
            <NavLink to="/5">Add a Paddle</NavLink>
            <NavLink to="/6">Keypress is tricky</NavLink>
            <NavLink to="/7">Get paddle to behave</NavLink>
            <NavLink to="/8">Tadaa!</NavLink>
            <NavLink to="/9">Componentize</NavLink>
            <NavLink to="/10">Go Crazy!</NavLink>
          </nav>

          <div className="App-content">
            <Switch>
              <Route exact path="/1" component={One} />
              <Route exact path="/2" component={Two} />
              <Route exact path="/3" component={Three} />
              <Route exact path="/4" component={Four} />
              <Route exact path="/5" component={Five} />
              <Route exact path="/6" component={Six} />
              <Route exact path="/7" component={Seven} />
              <Route exact path="/8" component={Eight} />
              <Route exact path="/9" component={Nine} />
              <Route exact path="/10" component={Ten} />
              <Redirect from="/" to="/1" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
