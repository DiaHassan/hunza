import Home from "./Pages/home";
import Service from "./Pages/services";
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
