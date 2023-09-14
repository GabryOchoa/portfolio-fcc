import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Rothko from "./rothko";
import Gallery from "./gallery";
import Quiz from "./quiz";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/" className="nav-item">
          <h1>Rothko</h1>
        </Link>
        <Link to="/gallery" className="nav-item">
          <h1>Photo Gallery</h1>
        </Link>
        <Link to="/quiz" className="nav-item">
          <h1>HTML/CSS Quiz</h1>
        </Link>
        <Link to="/context" className="nav-item">
          <h1>Use Context</h1>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Rothko />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
}

export default App;
