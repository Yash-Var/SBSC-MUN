import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/stylesheets/style.css";
// import "./done.css";
import Index from "./components/HomePage/Index";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
