import React, { Fragment } from "react";
import "./App.css";
import LaunchListContainer from "./components/LaunchList";
import DefaultImg from "./components/images/spacex.png";

const App = () => {
  return (
    <Fragment>
      <img src={DefaultImg} alt="Space X Image" className="mainImg" />
      <LaunchListContainer />
    </Fragment>
  );
};

export default App;
