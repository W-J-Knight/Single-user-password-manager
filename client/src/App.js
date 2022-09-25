// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Addpassword from './pages/Addpassword';
import GetPassword from './pages/GetPassword';
import DeletePassword from './pages/DeletePassword';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addpassword />} />
        <Route path="/get" element={<GetPassword />} />
        <Route path="/delete" element={<DeletePassword />} />
      </Routes>


    </div>
  );
}

export default App;
