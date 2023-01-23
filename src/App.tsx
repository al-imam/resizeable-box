import { motion } from "framer-motion";
import classes from "./app.module.css";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.box}>
        <h1>Hello</h1>
        <button>Toggle</button>
      </div>
    </div>
  );
}

export default App;
