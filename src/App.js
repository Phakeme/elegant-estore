import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero/";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/login">
          <h1 style={{ marginTop: `${76 + 8 + 8}px` }}>Login</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
