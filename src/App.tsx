import "./App.css";
import { Route, Routes } from "react-router-dom";
import Accordion from "./pages/Accordion";
import Home from "./pages/Home";
import Tabs from "./pages/Tabs";
import Table from "./pages/Table";
import Rating from "./pages/Rating";
import Badge from "./pages/Badge";
import Navbar from "./pages/Navbar";
import Modal from "./pages/Modal";
import Sidebar from "./pages/Sidebar";
import ProgressBar from "./pages/ProgressBar";
import Spinner from "./pages/Spinner";
function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="accordion" element={<Accordion/>}/>
      <Route path="tabs" element={<Tabs/>}/>
      <Route path="table" element={<Table/>}/>
      <Route path="rating" element={<Rating/>}/>
      <Route path="badge" element={<Badge/>}/>
      <Route path="navbar" element={<Navbar/>}/>
      <Route path="modal" element={<Modal/>}/>
      <Route path="sidebar" element={<Sidebar/>}/>
      <Route path="progress-bar" element={<ProgressBar/>}/>
      <Route path="spinner" element={<Spinner/>}/>
    </Routes>
  );
}

export default App;