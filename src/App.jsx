import { useState } from "react";

import { TopLeftImg, Nav, Header } from "./components";

import { AnimatePresence, motion } from "framer-motion";

import { Transition } from "./components";

function App() {
  return (
    <>
      <TopLeftImg />
      <Nav />
      <Header />
    </>
  );
}

export default App;
