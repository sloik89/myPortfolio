import { useState } from "react";

import { TopLeftImg, Nav, Header } from "./components";

import { AnimatePresence, motion } from "framer-motion";
import { Home, About, Testimonials, Contact, Services, Work } from "./page";
import { Transition } from "./components";

function App() {
  return (
    <div className="page">
      <TopLeftImg />
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
