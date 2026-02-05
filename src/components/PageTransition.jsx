// src/components/PageTransition.jsx
import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      style={{ willChange: "transform, opacity, filter" }}
      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
      transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
