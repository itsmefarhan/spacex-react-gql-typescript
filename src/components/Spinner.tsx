import React from "react";
import Spin from "./images/spinner.gif";

const Spinner = () => (
  <div className='spinner'>
    <img src={Spin} alt="Loading" />
  </div>
);

export default Spinner;
