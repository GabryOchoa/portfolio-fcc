import React from "react";
import Heater from "./heater";
import Information from "./main";
import Footer from "./footer";
import "./style.css";

function Tribute() {
  return (
    <div>
      <head className="head-title">
        <title>Dr. S. Ramanujan</title>
      </head>
      <div className="body-tribe">
        <Heater />
        <Information />
        <Footer />
      </div>
    </div>
  );
}

export default Tribute;
