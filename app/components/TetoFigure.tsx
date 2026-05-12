"use client";

import { motion } from "framer-motion";
import { TETO_GIF } from "../lib/media";

export default function TetoFigure() {
  return (
    <motion.div
      className="teto-frame"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    >
      <div className="teto-frame-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={TETO_GIF} alt="Kasane Teto" />
      </div>
    </motion.div>
  );
}
