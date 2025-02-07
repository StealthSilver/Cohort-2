import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      ALLEN | CLASS 11 | CLASS 12
      <BrowserRouter>
        <Routes>
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          />

          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Landing() {
  return <div>Landing Page</div>;
}

function Class11Program() {
  return <div>Class 11 NEET program</div>;
}

function Class12Program() {
  return <div>Class 12 NEET program</div>;
}

export default App;
