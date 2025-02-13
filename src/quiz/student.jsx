export const Student = () => {
  /* this is student info component */
  const arrayStudent = [
    { id: "student-name", label: "Name:", type: "text" },
    { id: "student-email", label: "Email:", type: "email" },
  ];

  const row = arrayStudent.map((val) => {
    return (
      <div className="info" key={val.id}>
        <label htmlFor={val.id}>{val.label}</label>
        <input type={val.type} name={val.id} id={val.id} />
      </div>
    );
  });
  return (
    <>
      <section aria-labelledby="student-info">
        <h2 id="student-info">Student Info</h2>
        {row}
        <div className="info">
          <label htmlFor="birth-date">
            D.O.B.<span className="sr-only">(Date of Birth)</span>
          </label>
          <input type="date" name="birth-date" id="birth-date" />
        </div>
      </section>
    </>
  );
};
