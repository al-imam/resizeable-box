import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import useMeasure from "react-use-measure";

const circular = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

function ResizeAble({ children }: { children: React.ReactNode }) {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div animate={{ height }} style={{ position: "relative" }}>
      <AnimatePresence>
        <motion.div
          key={JSON.stringify(children, circular())}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          style={{ position: "absolute" }}
        >
          <div ref={ref}>{children}</div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default ResizeAble;
