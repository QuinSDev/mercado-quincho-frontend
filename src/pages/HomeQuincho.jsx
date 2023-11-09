import React from "react";
import { NavBar } from "../components/NavBar";
import { QuinchoBar } from '../components/QuinchoBar';
import { Footer } from "../components/Footer";

export const HomeQuincho = () => {
  return (
    <>
      <div data-theme="light">
        <NavBar />
        <QuinchoBar />
        <Footer/>
      </div>
    </>
  );
};
