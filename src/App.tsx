import { motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";
import { useState } from "react";
import classes from "./app.module.css";

function App() {
  const [expand, setExpand] = useState(false);
  const [ref, { height }] = useMeasure();

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <div className={classes.app}>
        <div className={classes.box}>
          <h1>Hello</h1>
          <button onClick={() => setExpand(!expand)}>Toggle</button>
          <motion.div animate={{ height }}>
            <div ref={ref}>
              {expand ? (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  ipsum in ducimus fugit dolore reiciendis reprehenderit
                  corrupti molestiae illum facilis! Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Placeat, et. Praesentium facilis
                  accusantium cum eum esse, eius ipsum error vel.
                </p>
              ) : (
                <p>Lorem, ipsum dolor.</p>
              )}
            </div>
          </motion.div>
        </div>
        <p className={classes.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil
          laborum dolore recusandae hic. Enim vero repellat molestias modi
          labore voluptas totam voluptatem, quae, eveniet iusto aliquam
          reprehenderit exercitationem laborum?
        </p>
      </div>
    </MotionConfig>
  );
}

export default App;
