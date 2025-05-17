"use client";

import React, { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

type Props = {
  children: ReactNode;
  sec: number;
  strana: "left" | "right" | "top" | "bottom";
};

const ScrollAnimationX = ({ children, sec, strana }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0 });
    }
  }, [controls, inView]);

  let initialPosition: { x?: number; y?: number } = {};
  switch (strana) {
    case "left":
      initialPosition = { x: -400 };
      break;
    case "right":
      initialPosition = { x: 400 };
      break;
    case "top":
      initialPosition = { y: -400 };
      break;
    case "bottom":
      initialPosition = { y: 400 };
      break;
  }

  return (
    <div ref={ref}>
      <motion.div
        initial={initialPosition}
        animate={controls}
        transition={{ duration: sec }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollAnimationX;
