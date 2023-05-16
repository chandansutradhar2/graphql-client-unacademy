import logo from "./logo.svg";
import "./App.css";
import { CourseDetail } from "./CourseDetail";
import { Courses } from "./Courses";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h2>Apollo Client Demo</h2>
      <button onClick={() => setShow(!show)}>Show Course Detail</button>
      {/* { show ? <CourseDetail /> : <Courses /> }
       */}
      <Courses />
    </div>
  );
}

export default App;
