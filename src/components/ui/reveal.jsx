import React from "react";
import { motion } from "framer-motion";

const getOffset = (direction, distance) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

export const Reveal = ({
  children,
  direction = "up",
  distance = 40,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className = "",
}) => {
  const initial = { opacity: 0, ...getOffset(direction, distance) };
  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration, delay, ease: "easeOut" },
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
