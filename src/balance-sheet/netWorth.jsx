import React from "react";

const totalData = [{ total: "$-171" }, { total: "$136" }, { total: "$334" }];
export const NetWorth = ({ year }) => {
  return (
    <div className="netWorth-container">
      <table>
        <caption>Net Worth</caption>
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
          <tr className="total">
            <th>
              Total <span className="sr-only">Net Worth</span>
            </th>
            {/* iterates data of totalData array  */}
            {totalData.map((val, index) => (
              /* the className has a validation that the latter receives a class */
              <td
                key={index}
                className={index === totalData.length - 1 ? "current" : ""}
              >
                {val.total}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
