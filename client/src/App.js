// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Addpassword from './pages/Addpassword';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addpassword />} />
      </Routes>


    </div>
  );
}

export default App;
