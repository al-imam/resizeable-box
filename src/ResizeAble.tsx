import { motion } from "framer-motion";
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
    <motion.div animate={{ height }}>
      <motion.div
        key={JSON.stringify(children, circular())}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </motion.div>
  );
}

export default ResizeAble;
