import { motion } from "framer-motion";
import { useState } from "react";
import classes from "./app.module.css";

function App() {
  const [expand, setExpand] = useState(false);
  return (
    <div className={classes.app}>
      <div className={classes.box}>
        <h1>Hello</h1>
        <button onClick={() => setExpand(!expand)}>Toggle</button>
        <div>
          {expand ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsum in ducimus fugit dolore reiciendis reprehenderit corrupti
              molestiae illum facilis!
            </p>
          ) : (
            <p>Lorem, ipsum dolor.</p>
          )}
        </div>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil laborum
      dolore recusandae hic. Enim vero repellat molestias modi labore voluptas
      totam voluptatem, quae, eveniet iusto aliquam reprehenderit exercitationem
      laborum?
    </div>
  );
}

export default App;
