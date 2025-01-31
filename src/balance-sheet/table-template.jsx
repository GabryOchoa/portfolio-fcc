import React from "react";

/* This is a template table component  */
export const TableTemplate = ({ year, data, title }) => {
  return (
    <div className="table-container">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <td></td>
            {/* iterates year data from index */}
            {year.map((value, index) => (
              <th key={index}>
                <span className="sr-only year">{value.year}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* iterates the data coming from the index and depends on which table receives the information  */}
          {data.map((data, index) => (
            <tr key={index} className="data">
              <th>
                {data.name}{" "}
                <span className="description">{data.description}</span>
              </th>
              {data.values.map((val, i) => (
                /* the className has a validation that the latter receives a class */
                <td
                  key={i}
                  className={i === data.values.length - 1 ? "current" : ""}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
          <tr className="total">
            {/* this is the last row of the table */}
            <th>
              Total <span className="sr-only">{title}</span>
            </th>
            {/* validation if array has data */}
            {data.length > 0 && data[0].values
              ? data[0].values.map((_, i) => {
                  /* Get data for every column */
                  const total = data.reduce((acc, item) => {
                    const value = item.values[i] || "0"; //get the value if it does not exist, 0 is assigned
                    return acc + parseFloat(value.replace(/[^0-9.-]+/g, "")); //convert string to number data
                  }, 0);
                  const formattedTotal = isNaN(total)
                    ? "$0"
                    : `$${total.toFixed(0)}`;
                  return (
                    <td
                      /* the className has a validation that the latter receives a class */
                      key={i}
                      className={
                        i === data[0].values.length - 1 ? "current" : ""
                      }
                    >
                      {/* Receive the sum of the values of each column */}
                      {formattedTotal}
                    </td>
                  );
                })
              : null}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
