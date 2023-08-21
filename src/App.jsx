import { useState } from "react";

import { TopLeftImg, Nav, Header } from "./components";

import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Transition } from "./components";

function App() {
  return (
    <div className="page">
      <TopLeftImg />
      <Nav />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
