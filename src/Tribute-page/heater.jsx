import React from "react";

function Heater() {
  return (
    <div>
      <div class="header-tribute">
        <h1 id="title-tribute">Dr. Srinivasa Ramanujan</h1>
        <p>The man who taught infinity</p>
      </div>
      <div id="img-div">
        <img
          id="image"
          src="https://images.theconversation.com/files/119682/original/image-20160421-26983-1bcf1xs.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          alt="shows the people being talked about"
        />
        <figcaption id="img-caption">
          Dr. Srinivasa Ramanujan, in the middle, with fellow Scientists, his
          contributions were to the fields of mathematical analysis, number
          theory, infinite series, and continued fractions.
        </figcaption>
      </div>
    </div>
  );
}

export default Heater;
