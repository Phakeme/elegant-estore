import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrimarySearchAppBar from "./Components/Appbar";

function App() {
  return (
    <Router>
      <PrimarySearchAppBar />
    </Router>
  );
}

export default App;
