import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LaunchListContainer from "./components/LaunchList";
import LaunchProfileContainer from "./components/LaunchProfile";
import DefaultImg from "./components/images/spacex.png";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <img src={DefaultImg} alt="Space X" className="mainImg" />
      <Switch>
        <Route exact path="/" component={LaunchListContainer} />
        <Route exact path="/:id" component={LaunchProfileContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
