// import logo from './logo.svg';
import './App.css';
import NewNavbar from './components/NewNavbar'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Addpassword from './pages/Addpassword';
import GetPassword from './pages/GetPassword';
import DeletePassword from './pages/DeletePassword';
import UpdatedPassWord from './pages/UpdatedPassword';

function App() {
  return (
    <div className="App">
      <NewNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addpassword />} />
        <Route path="/get" element={<GetPassword />} />
        <Route path="/delete" element={<DeletePassword />} />
        <Route path="/update" element={<UpdatedPassWord />} />
      </Routes>


    </div>
  );
}

export default App;
