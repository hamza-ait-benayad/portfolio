import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <div className="fixed -top-30 -left-30 w-full h-full pointer-events-none cursor-none -z-[9999]">
        <motion.div
          className="w-[200px] h-[200px] bg-primary-700/50 rounded-full blur-3xl "
          animate={{
            x: position.x + 80,
            y: position.y + 80,
          }}
          transition={{
            type: "tween",
          
          }}
        />
      </div>
    </>
  );
};

export default AnimatedCursor;
