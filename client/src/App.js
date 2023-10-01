import './App.css';
import User from "./Components/UserManage";
import Navbar from './Components/Navbar';
import Home from "./Components/Home"
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Eligibility from "./Components/Eligibility";
import Org from "./Components/Org"
import Donate from "./Components/Donate";
import Request from "./Components/Request";
import Userdetails from './Components/Userdetails';
import Bloodstates from './Context/Bloodstates';
import Search from './Components/Search';
function App() {
  return (
    <>
    <Bloodstates>
   <User />
   <Navbar />
   <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="/login" element={<Login />} />
   <Route exact path="/signup" element={<Signup />} />
   <Route exact path="/eligible" element={<Eligibility />} />
   <Route exact path="/org" element={<Org />} />
   <Route exact path="/donate" element={<Donate />} />
   <Route exact path="/request" element={<Request />} />
   <Route exact path="/userdetails" element={<Userdetails />} />
   <Route exact path="/search" element={<Search />} />
   </Routes>
   </Bloodstates>
   </>
  );
}

export default App;
