"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { TETO_POTETO_GIF } from "../lib/media";

const BUBBLE_TEXT = "SERGIO TE AMA MUCHO Y SIEMPRE LO HARÁ 💗";
const HIDE_DELAY = 4000; // ms

export default function TetoPotetoBuddy() {
  const [showMessage, setShowMessage] = useState(false);
  const gifControls = useAnimation();
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-hide the message after HIDE_DELAY
  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setShowMessage(false);
    }, HIDE_DELAY);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const handleClick = async () => {
    // Wiggle the gif
    gifControls.start({
      rotate: [0, -10, 10, -7, 7, -3, 3, 0],
      scale: [1, 1.12, 1],
      transition: { duration: 0.5 },
    });

    // Always show message (re-show if already visible)
    setShowMessage(false);
    // Small delay so React unmounts → remounts for fresh animation
    requestAnimationFrame(() => {
      setShowMessage(true);
      scheduleHide();
    });
  };

  return (
    <>
      {/* Drag constraints container (full screen) */}
      <div className="poteto-container" />

      {/* Draggable poteto buddy (the image bubble moves, NOT the text) */}
      <motion.div
        className="poteto-wrapper"
        drag
        dragConstraints={{ top: -500, left: -500, right: 50, bottom: 50 }}
        dragMomentum={false}
        dragElastic={0.08}
        whileDrag={{ scale: 1.08, cursor: "grabbing" }}
        style={{ cursor: "grab", touchAction: "manipulation" }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        onClick={handleClick}
      >
        {/* Floating text message — NOT draggable, just appears/disappears */}
        {showMessage && (
          <motion.div
            className="poteto-bubble"
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ pointerEvents: "none" }}
          >
            <p>{BUBBLE_TEXT}</p>
          </motion.div>
        )}

        <motion.img
          src={TETO_POTETO_GIF}
          alt="Teto Poteto"
          className="poteto-gif"
          animate={gifControls}
          draggable={false}
        />
      </motion.div>
    </>
  );
}
