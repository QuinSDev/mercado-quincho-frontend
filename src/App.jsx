import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { QuinchoForm } from "./pages/QuinchoForm";
import { UserRegisterForm } from "./pages/UserRegisterForm";
import { UserLoginForm } from "./pages/UserLoginForm";
import { HomeQuincho } from "./pages/HomeQuincho";
import { Dashboard } from "./pages/Dashboard"
import { UserAccount } from "./pages/UserAccount";
import { EditUserForm } from "./pages/EditUserForm"

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userAccount" element={<UserAccount />} />
        <Route path="/editUser" element={<EditUserForm />} />

      </Routes>
    </Router>
    </>
  );
};