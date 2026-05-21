import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Services from "./pages/Services.jsx";
import Impact from "./pages/Impact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Support from "./pages/Support.jsx";
import Emergency from "./pages/Emergency.jsx";
import Facilities from "./pages/Facilities.jsx";
import Contact from "./pages/Contact.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Transparency from "./pages/Transparency.jsx";
import FAQ from "./pages/FAQ.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollAnimationProvider from "./components/ScrollAnimationProvider.jsx";

function App() {
  return (
    <ScrollAnimationProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/support" element={<Support />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </ScrollAnimationProvider>
  );
}

export default App;