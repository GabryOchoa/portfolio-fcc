/*This QuizH component shows the whole section number 2 of the questions */
const QuizH = ({ arr }) => {
  const il = arr.option.map((val) => {
    return (
      <li key={val.id}>
        <label htmlFor={val.id}>
          <input
            type="radio"
            id={val.id}
            name={val.nameInput}
            value={val.value}
          />
          {val.label}
        </label>
      </li>
    );
  });
  return (
    <div className="question-block">
      <p>{arr.num}</p>
      <fieldset className="question" name={arr.nameField}>
        <legend>{arr.legend}</legend>
        <ul className="answers-list">{il}</ul>
      </fieldset>
    </div>
  );
};

/* This HTML component selection number 2 of the page  */
export const Question = () => {
  /* Object array for each div, fieldset and legend*/
  const object = [
    {
      num: "1",
      nameField: "html-question-one",
      legend: `The legend element represents a caption for the content of its parent fieldset element`,
      nameInput: "q1",
      option: [
        { id: "q1-a1", value: "true", label: "True", nameInput: "q1" },
        { id: "q1-a2", value: "false", label: "False", nameInput: "q1" },
      ],
    },
    {
      num: "2",
      nameField: "html-question-two",
      legend: `A label element nesting an input element is required to have a for attribute with the same value as the input's id`,
      nameInput: "q2",
      option: [
        { id: "q2-a1", value: "true", label: "True", nameInput: "q2" },
        { id: "q2-a2", value: "false", label: "False", nameInput: "q2" },
      ],
    },
  ];
  /* it maps each value of the array object */
  const quizHtml = object.map((value) => <QuizH key={value.num} arr={value} />);

  return (
    <section aria-labelledby="html-questions">
      <h2 id="html-questions">HTML</h2>
      {quizHtml}
    </section>
  );
};
