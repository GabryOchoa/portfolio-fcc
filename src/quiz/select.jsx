/* This select component brings the option select  */
const Option = () => {
  const arraySelect = [
    { id: 1, value: "", option: "select an option" },
    { id: 2, value: "yes", option: "Yes" },
    { id: 3, value: "no", option: "No" },
  ];

  const optionMap = arraySelect.map((val) => {
    return (
      <option key={val.id} value={val.value}>
        {val.option}
      </option>
    );
  });
  return (
    <div className="answer">
      <select name="customer" id="customer" required>
        {optionMap}{" "}
      </select>
    </div>
  );
};

/* This is CSS component is section number 3 of the page */
export const Select = () => {
  return (
    <section aria-labelledby="css-questions">
      <h2 id="css-questions">CSS</h2>
      <div className="form-row">
        <div className="question-block">
          <label htmlFor="customer">Are you a frontend developer?</label>
        </div>
        {/* call the selected component where an array for the options map is found */}
        <Option />
        <div className="question-block">
          <label htmlFor="css-questions">Do you have any questions:</label>
        </div>
        <div className="answer">
          <textarea
            id="css-questions"
            name="css-questions"
            rows="5"
            cols="40"
            placeholder="Who is flexbox..."
          ></textarea>
        </div>
      </div>
    </section>
  );
};
