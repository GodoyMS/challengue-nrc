import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Prueba from "./pages/Prueba";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/prueba" element={<Prueba />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
