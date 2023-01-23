import { MotionConfig } from "framer-motion";
import { useState } from "react";
import classes from "./app.module.css";
import ResizeAble from "./ResizeAble";

export const duration = 1;

function App() {
  const [expand, setExpand] = useState(0);

  return (
    <MotionConfig transition={{ duration }}>
      <div className={classes.app}>
        <div className={classes.box}>
          <h1> Resizing Box Animation</h1>
          <div className={classes.buttonGroup}>
            <button onClick={() => setExpand(expand + 1)}>Toggle</button>
            <div className={classes.input}>
              <input type="checkbox" id="c" />
              <label htmlFor="c">Carosule</label>
            </div>
          </div>
          <ResizeAble>
            {expand % 3 === 2 ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, doloremque repellendus! Voluptas odio consequuntur
                distinctio repellendus voluptatem sapiente sint tempora
                exercitationem aperiam ea iure eum repudiandae cum dolore
                suscipit autem, odit consectetur quisquam non, pariatur quam,
                nam iusto assumenda? Iure libero quos dolorem amet beatae velit
                suscipit quasi voluptas necessitatibus.
              </p>
            ) : expand % 3 === 1 ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ipsum in ducimus fugit dolore reiciendis reprehenderit corrupti
                molestiae illum facilis! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Placeat, et. Praesentium facilis accusantium
                cum eum esse, eius ipsum error vel.
              </p>
            ) : (
              <p>Lorem, ipsum dolor.</p>
            )}
          </ResizeAble>
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
