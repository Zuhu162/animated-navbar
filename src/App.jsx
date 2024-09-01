import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const [viewportHeight, setViewportHeight] = useState(0);
  const [animatedNavbarPos, setAnimatedNavbarPos] = useState(20);

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPercentage = latest * 100;
    if (scrollPercentage > 5) {
      setAnimatedNavbarPos(viewportHeight - 100);
    } else {
      setAnimatedNavbarPos(20);
    }
  });

  return (
    <div>
      <motion.div
        style={{
          top: animatedNavbarPos,
          position: "fixed",
          zIndex: 10,
          width: "100%",
        }}
      >
        <Navbar />
      </motion.div>
      <div className="w-full h-screen bg-blue-900" />
      <div className="w-full h-screen bg-blue-700" />
    </div>
  );
}
