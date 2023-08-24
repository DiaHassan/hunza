import Home from "./Pages/home";
import Service from "./Pages/services";
import Carrers from "./Pages/carrers";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Service />} />
          <Route path="/carrers" element={<Carrers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
