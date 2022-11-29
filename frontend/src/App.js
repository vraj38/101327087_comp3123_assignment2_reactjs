import "./App.css";
import Navbar from "./Components/Navbar";
import AddEmployee from "./Components/AddEmployee";
import AllEmployees from "./Components/AllEmployees";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = { <AllEmployees />} /> 
          <Route path="/add" element = { <AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
