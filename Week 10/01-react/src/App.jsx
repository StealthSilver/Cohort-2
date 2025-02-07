import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">ALLEN</Link> |
        <Link to="/neet/online-coaching-class-11">CLass 11</Link> |
        <Link to="/neet/online-coaching-class-12">CLass 12</Link>
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
