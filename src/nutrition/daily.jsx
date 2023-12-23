/*This row component save different paragraphs of the daily component */
const Row = ({ value }) => (
  <p>
    <span>
      <span className="bold">{value.name}</span> {value.amount}
    </span>
    <span className="bold">{value.percentage}</span>
  </p>
);

/* this component is showing daily value  */
export const Daily = ({ array }) => {
  /* we use map to call the arrayInfo array   */
  const row = array.map((value) => <Row key={value.name} value={value} />);

  return (
    <div>
      <p className="bold right no-divider">% Daily Value *</p>
      <div className="divider"></div>
      <Row value={{ name: "Total Fat", amount: "8g", percentage: "10%" }} />
      <p className="indent no-divider">
        Saturated Fat 1g <span className="bold">5%</span>
      </p>
      <div className="divider"></div>
      <p className="indent no-divider">
        <span>
          <i>Trans</i> Fat 0g
        </span>
      </p>
      <div className="divider"></div>
      {/* we show here the values of the array  */}
      {row}
      <p className="indent no-divider">Dietary Fiber 4g</p>
      <div className="divider"></div>
      <p className="indent no-divider">Total Sugars 12g</p>
      <div className="divider double-indent"></div>
      <p className="double-indent no-divider">
        Includes 10g Added Sugars <span className="bold">20%</span>
      </p>
      <div className="divider"></div>
    </div>
  );
};
