import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  MainRouter, 
  ArchiveProjects, 
  Home
} from "./pages";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainRouter />} >
            <Route index element={<Home />} />
            <Route path="/ArchiveProjects" element={<ArchiveProjects />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
