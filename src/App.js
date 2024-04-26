import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Projects from "./components/Project/Projects";
import AddProject from "./components/AddProject/AddProject1";
import Main from "./components/Main/Main";
import Plag from "./components/Plag/Plag";
import UserProfile from "./components/Profile/UserProfile";
import UniProfile from "./components/Profile/UniProfile";
import ContactUs from "./components/ContactUs/ContactUs";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/plag" element={<Plag />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/uniprofile" element={<UniProfile />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
