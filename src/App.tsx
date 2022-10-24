import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./view/HomePage";
import { Description } from "./view/Description";
import { Users } from "./view/Users";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Document/:id" element={<Description />} />
      <Route path="/Users/:username" element={<Users />} />
    </Routes>
  );
};
