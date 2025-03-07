/* this component is showing protein value  */
export const Protein = () => {
  // this one is an array of object
  const arrayPro = [
    { id: 1, name: "Vitamin D 2mcg", percentage: "10%" },
    { id: 2, name: "Calcium 260mg", percentage: "20%" },
    { id: 3, name: "Iron 8mg", percentage: "45%" },
  ];
  /* we use map to call the arrayPro array   */
  const rows = arrayPro.map((val) => (
    <p key={val.id}>
      {val.name} <span>{val.percentage}</span>
    </p>
  ));

  return (
    <>
      <p className="no-divider">
        <span className="bold">Protein</span> 3g
      </p>
      <div className="divider large"></div>
      {/* we show here the values of the array  */}
      {rows}
      <p className="no-divider">
        Potassium 235mg <span>6%</span>
      </p>
    </>
  );
};
