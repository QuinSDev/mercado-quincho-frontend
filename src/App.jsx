import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "../src/pages/Home"
import { QuinchoForm } from "../src/pages/QuinchoForm";
import { UserRegisterForm } from "../src/pages/UserRegisterForm";
import { UserLoginForm } from "../src/pages/UserLoginForm";
import { HomeQuincho } from "../src/pages/HomeQuincho";
import { Dashboard } from "./pages/Dashboard";
import { ModalUser } from "./components/ModalUser";
import { ModalQuincho } from "./components/ModalQuincho";




export const App = () => {
  
  
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<UserLoginForm />} />
          <Route path="/register" element={<UserRegisterForm />} />
        </Route>
        <Route path="/register/quincho" element={<QuinchoForm />} />
        <Route path="/quinchos" element={<HomeQuincho />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/modalUser" element={<ModalUser/>}/>
        <Route path="/modalQuincho" element={<ModalQuincho/>}/>
      </Routes>
    </Router>
    </>
  );
};