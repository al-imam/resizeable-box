import { motion } from "framer-motion";
import React from "react";
import useMeasure from "react-use-measure";

function ResizeAble({ children }: { children: React.ReactNode }) {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div animate={{ height }}>
      <div ref={ref}>{children}</div>
    </motion.div>
  );
}

export default ResizeAble;
