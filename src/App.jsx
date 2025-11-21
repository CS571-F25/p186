import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import SiteNavbar from "./components/SiteNavbar.jsx";
import Home from "./components/Home.jsx";
import Browse from "./components/Browse.jsx";
import SubmitReview from "./components/SubmitReview.jsx";
import AboutMe from "./components/AboutMe.jsx";

function App() {
  return (
    <>
      <SiteNavbar />
      <Container className="mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/submit" element={<SubmitReview />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;