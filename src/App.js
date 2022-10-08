import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Headers from "./Headers";
import AboutUs from "./Pages/AboutUs";
import Project from "./Pages/Project";
import ContactUs from "./Pages/ContactUs";
import UserLogin from "./Pages/Login";
import Registration from "./Pages/Registration";
import Projects from "./Pages/Project";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/Home" element={<Headers />}></Route>
        <Route path="/" element={<Headers />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        {/* <Route path="/login" element={<UserLogin />}></Route> */}
        {/* <Route path="/Register" element={<Registration />}></Route> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
