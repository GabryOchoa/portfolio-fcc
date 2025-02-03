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
export const Header = () => {
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
    <div className="header-container">
      <header>
        <img id="logo" src={objHeader.imgLogo} alt="this is logo page" />
        <h1>HTML/CSS Quiz</h1>
        {row}
      </header>
    </div>
  );
};
