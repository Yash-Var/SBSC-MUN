import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TopNav from "./components/Navbar/TopNav";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/stylesheets/style.css";
import Index from "./components/HomePage/Index";
function App() {
  return (
    <div>
      <TopNav />
      <Index />
      <Footer/>
    </div>
  );
}

export default App;
