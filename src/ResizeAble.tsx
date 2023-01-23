import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import useMeasure from "react-use-measure";
import { duration } from "./App";

const circular = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith("_")) return;
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
    <motion.div
      animate={{ height: height || "auto" }}
      style={{ position: "relative" }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, circular())}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: duration / 2, delay: duration / 2 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: duration / 2 },
          }}
          style={{ position: height ? "absolute" : "relative" }}
        >
          <div ref={ref}>{children}</div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default ResizeAble;
