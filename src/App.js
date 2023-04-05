import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/stylesheets/style.css";
// import "./done.css";
import Index from "./components/HomePage/Index";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import About from "./components/AboutSection/About";
import Event from "./components/Event/Event";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editorials } from "./components/Editorials/Editorials";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Index /> */}
      {/* <Team /> */}
      {/* <Footer /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/blog" element={<Blogs />} /> */}
          <Route path="/event" element={<Event />} />
          <Route path="/editorial" element={<Editorials />} />

          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/summit" element={<Summit />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
