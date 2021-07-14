import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Product } from "./Components/";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <h1 style={{ marginTop: `${76 + 8 + 8}px` }}>Login</h1>
        </Route>
        <Route path="/product/:slug/:id">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
