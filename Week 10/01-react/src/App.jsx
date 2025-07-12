import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            />

            <Route path="/" element={<Landing />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh", background: "#f1f1f1" }}>
      <Link to="/">ALLEN</Link> |
      <Link to="/neet/online-coaching-class-11">CLass 11</Link> |
      <Link to="/neet/online-coaching-class-12">CLass 12</Link>
      <div style={{ height: "90vh" }}>
        <Outlet />
      </div>
      footer
    </div>
  );
}

function ErrorPage() {
  return <div>Sorry page not found</div>;
}

function Landing() {
  return <div>Landing Page</div>;
}

function Class11Program() {
  return <div>Class 11 NEET program</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      Class 12 NEET program <br /> <br />
      <button onClick={redirectUser}>GO back to the landing page</button>
    </div>
  );
}

export default App;
