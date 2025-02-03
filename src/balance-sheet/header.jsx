import React from "react";

/*Header component of table */
export const Header = ({ years }) => {
  return (
    <div className="header-container">
      <h1>
        <span className="flex">
          <span>AcmeWidgetCorp</span>
          <span>Balance Sheet</span>
        </span>
      </h1>
      <div className="years-header" aria-hidden="true">
        {/* iterates year data from index  */}
        {years.map((value, index) => (
          <span key={index} className="year">
            {value.year}
          </span>
        ))}
      </div>
    </div>
  );
};
