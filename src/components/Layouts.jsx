import React from "react";
import App from "../App";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./Transition";
import { useLocation } from "react-router-dom";
const Layouts = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="page">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname}>
            <Transition />
            <App />
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Layouts;
