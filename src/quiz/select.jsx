/* This select component brings the option select  */
const Option = () => {
  const arraySelect = [
    { value: "", option: "select an option" },
    { value: "yes", option: "Yes" },
    { value: "no", option: "No" },
  ];

  const optionMap = arraySelect.map((val) => {
    return (
      <>
        <option value={val.value}>{val.option}</option>
      </>
    );
  });
  return (
    <div class="answer">
      <select name="customer" id="customer" required>
        {optionMap}{" "}
      </select>
    </div>
  );
};

/* This is CSS component is section number 3 of the page */
export const Select = () => {
  return (
    <section /*role="region"*/ aria-labelledby="css-questions">
      <h2 id="css-questions">CSS</h2>
      <div class="form-row">
        <div class="question-block">
          <label for="customer">Are you a frontend developer?</label>
        </div>
        {/* call the selected component where an array for the options map is found */}
        <Option />
        <div class="question-block">
          <label for="css-questions">Do you have any questions:</label>
        </div>
        <div class="answer">
          <textarea
            id="css-questions"
            name="css-questions"
            rows="5"
            cols="24"
            placeholder="Who is flexbox..."
          ></textarea>
        </div>
      </div>
    </section>
  );
};
