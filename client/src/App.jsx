import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { logo } from "./assets";

import { Home, CreatePost } from "./pages";
import { Nav } from "./components";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main className="sm:p-8 px-16 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
