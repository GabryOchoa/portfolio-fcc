import React from "react";

function Footer() {
  return (
    <div className="footer-tribute">
      <h3>
        If you have time, you should read more about this incredible human being
        on his{" "}
        <a
          id="tribute-link"
          href="https://en.wikipedia.org/wiki/Srinivasa_Ramanujan"
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia entry
        </a>
        .
      </h3>
    </div>
  );
}

export default Footer;
