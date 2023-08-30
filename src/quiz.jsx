import React from "react";
import "./quiz.css";

/* This is a column component of the Header */
const Row = ({ value }) => (
  <nav>
    <ul>
      <li>
        <a href={value.ref} /* accessKey={value.access} */ key={value.key}>
          {value.tag}
        </a>
      </li>
    </ul>
  </nav>
);

/* This is header component of the quiz */
const Header = () => {
  const objHeader = {
    imgLogo: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
    arrayTag: [
      { tag: "INFO", ref: "#student-info", access: "i", key: "01info" },
      { tag: "HTML", ref: "#html-questions", access: "h", key: "02html" },
      { tag: "CSS", ref: "#css-questions", access: "c", key: "01css" },
    ],
  };

  const row = objHeader.arrayTag.map((value) => (
    <Row key={value.key} value={value} />
  ));
  return (
    <header>
      <img id="logo" src={objHeader.imgLogo} alt="this is logo page" />
      <h1>HTML/CSS Quiz</h1>
      {row}
    </header>
  );
};

/* this is student info component */
const Student = () => {
  const arrayStudent = [
    { id: "student-name", label: "Name:", type: "text" },
    { id: "student-email", label: "Email:", type: "email" },
  ];

  const row = arrayStudent.map((val) => {
    return (
      <div className="info">
        <label for={val.id}>{val.label}</label>
        <input type={val.type} name={val.id} id={val.id} />
      </div>
    );
  });
  return (
    <>
      <section /*role="region"*/ aria-labelledby="student-info">
        <h2 id="student-info">Student Info</h2>
        {row}
        <div class="info">
          <label for="birth-date">
            D.O.B.<span class="sr-only">(Date of Birth)</span>
          </label>
          <input type="date" name="birth-date" id="birth-date" />
        </div>
      </section>
    </>
  );
};

/*This QuizH component shows the whole section number 2 of the questions */
const QuizH = ({ arr }) => {
  const il = arr.option.map((val) => {
    return (
      <>
        <li>
          <label for={val.id}>
            <input
              type="radio"
              id={val.id}
              name={val.nameInput}
              value={val.value}
            />
            {val.label}
          </label>
        </li>
      </>
    );
  });
  return (
    <div class="question-block">
      <p>{arr.num}</p>
      <fieldset className="question" name={arr.nameField}>
        <legend>{arr.legend}</legend>
        <ul class="answers-list">{il}</ul>
      </fieldset>
    </div>
  );
};

/* This HTML component selection number 2 of the page  */
const Html = () => {
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
  const quizHtml = object.map((value) => (
    <QuizH key={value.nameInput} arr={value} />
  ));

  return (
    <section /*role="region"*/ aria-labelledby="html-questions">
      <h2 id="html-questions">HTML</h2>
      {quizHtml}
    </section>
  );
};
/* This select component brings the option select  */
const Select = () => {
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
const CSS = () => {
  return (
    <section /*role="region"*/ aria-labelledby="css-questions">
      <h2 id="css-questions">CSS</h2>
      <div class="form-row">
        <div class="question-block">
          <label for="customer">Are you a frontend developer?</label>
        </div>
        {/* call the selected component where an array for the options map is found */}
        <Select />
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

/* This Footer component */
const Footer = () => {
  return (
    <footer>
      <address>
        <a href="https://freecodecamp.org">freeCodeCamp</a>
        <br />
        San Francisco
        <br />
        California
        <br />
        USA
      </address>
    </footer>
  );
};

/* This FormQuiz component calls the whole components of the project */
const FormQuiz = () => {
  return (
    <div className="quiz">
      <Header />
      <main>
        <form
          method="post"
          action="https://freecodecamp.org/practice-project/accessibility-quiz"
        >
          <Student />
          <Html />
          <CSS />
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

/* This is the main Quiz component */
const Quiz = () => {
  return (
    <>
      <FormQuiz />
    </>
  );
};

export default Quiz;
