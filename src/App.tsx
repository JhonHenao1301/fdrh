import "./App.css";
import Home from "./pages/Home";
import Application from "./pages/Application";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </div>
  );
}

export default App;
