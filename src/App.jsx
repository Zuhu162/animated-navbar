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
  const [navWidth, setNavWidth] = useState("full");

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  const springConfig = { stiffness: 300, damping: 30 };
  const animatedNavbarPos = useSpring(20, springConfig);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPercentage = latest * 100;
    if (scrollPercentage > 5) {
      animatedNavbarPos.set(viewportHeight - 100);
      setTimeout(() => {
        setNavWidth("1/2");
      }, 500);
    } else {
      animatedNavbarPos.set(20);
      setTimeout(() => {
        setNavWidth("full");
      }, 500);
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
        }}>
        <Navbar width={navWidth} />
      </motion.div>
      <div id="Home" className="w-full h-screen bg-blue-900" />
      <div id="Profile" className="w-full h-screen bg-blue-700" />
    </div>
  );
}
