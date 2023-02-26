import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Edituser from './components/edituser/Edituser';
import Adduser from './components/adduser/Adduser';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <header>
     <Navbar/>
      </header>
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="user/edit/:id" element={<Edituser />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
