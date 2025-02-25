import React from "react";
import Heater from "./heater";
import Information from "./main";
import Footer from "./footer";
import "./style.css";

function Tribute() {
  return (
    <div className="body-tribe">
      <Heater />
      <Information />
      <Footer />
    </div>
  );
}

export default Tribute;
