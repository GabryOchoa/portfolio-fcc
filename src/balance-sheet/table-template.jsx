import React from "react";

export const TableTemplate = ({ year, data, title }) => {
  return (
    <div className="table-container">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <td></td>
            {year.map((value, index) => (
              <th key={index}>
                <span className="sr-only year">{value.year}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index} className="data">
              <th>
                {data.name}{" "}
                <span className="description">{data.description}</span>
              </th>
              {data.values.map((val, i) => (
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
            <th>
              Total <span className="sr-only">{title}</span>
            </th>
            {data.length > 0 && data[0].values
              ? data[0].values.map((_, i) => {
                  const total = data.reduce((acc, item) => {
                    const value = item.values[i] || "0";
                    return acc + parseFloat(value.replace(/[^0-9.-]+/g, ""));
                  }, 0);
                  const formattedTotal = isNaN(total)
                    ? "$0"
                    : `$${total.toFixed(0)}`;
                  return (
                    <td
                      key={i}
                      className={
                        i === data[0].values.length - 1 ? "current" : ""
                      }
                    >
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
