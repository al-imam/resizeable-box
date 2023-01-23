import { motion } from "framer-motion";
import classes from "./app.module.css";

function App() {
  return (
    <div className={classes.app}>
      <motion.div
        whileHover={{ scale: 1.1, filter: "brightness(1.5)" }}
        className={classes.center}
      ></motion.div>
    </div>
  );
}

export default App;
