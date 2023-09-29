import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { AppProvider } from "./context/AppContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts.jsx";
import { Home, About, Testimonials, Contact, Services, Work } from "./page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
