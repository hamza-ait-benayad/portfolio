import { useEffect, useRef } from "react";

const AnimatedCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = 0;
    let y = 0;
    let currentX = 0;
    let currentY = 0;
    let animFrameId;

    const moveCursor = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    // Smooth follow using lerp — no state updates = no re-renders
    const animate = () => {
      currentX += (x - currentX) * 0.08;
      currentY += (y - currentY) * 0.08;
      cursor.style.transform = `translate(${currentX - 100}px, ${currentY - 100}px)`;
      animFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    animFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[200px] h-[200px] bg-primary-700/50 rounded-full blur-3xl pointer-events-none -z-[9999]"
      aria-hidden="true"
    />
  );
};

export default AnimatedCursor;
