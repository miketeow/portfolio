"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      className="fixed bottom-0 left-0 right-0 h-2 z-50 bg-primary "
    />
  );
};

export default ProgressBar;
