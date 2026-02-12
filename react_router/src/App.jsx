import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import CurrentLocation from "./pages/CurrentLocation";
import { Dashboard } from "./pages/Dashboard";
import FallBackPage from "./pages/FallBackPage";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Team from "./pages/Team";
function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <CurrentLocation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="team" element={<Team />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<FallBackPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
