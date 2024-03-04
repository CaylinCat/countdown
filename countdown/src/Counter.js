import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./styles.css";

function Counter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  let date2 = new Date();
  let date1 = new Date("06/24/2023");
  let timediff = Math.round((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));

  useEffect(() => {
    const animation = animate(count, timediff, {
      duration: 4
    });

    return animation.stop;
  }, []);

  return <>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div>
      <motion.h1 className="counter">{rounded}</motion.h1> 
      <h2 className="counter_text"> Days together</h2>
    </div>
    <Link className="links" to="/main-menu">
      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%", transition: { duration: 0.5 } }}
      >
        💖
      </motion.div>
    </Link>
  </div>
  </>;
}

export default Counter;