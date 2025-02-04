import { Header } from "./header";
import { Student } from "./student";
import { Question } from "./question";
import { Select } from "./select";
import { Footer } from "./footer";

/* This FormQuiz component calls the whole components of the project */
export const Form = () => {
  return (
    <div className="quiz">
      <Header />
      <main>
        <form
          method="post"
          action="https://freecodecamp.org/practice-project/accessibility-quiz"
        >
          <Student />
          <Question />
          <Select />
          <button type="submit">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};
