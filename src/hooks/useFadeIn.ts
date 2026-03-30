import { useInView } from 'framer-motion';
import { useRef } from 'react';

export interface FadeInOptions {
  stagger?: number;
  duration?: number;
  y?: number;
  delay?: number;
}

export const useFadeIn = (options: FadeInOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const {
    stagger = 0.04,
    duration = 0.35,
    y = 15,
    delay = 0,
  } = options;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
      },
    },
  };

  return {
    ref,
    isInView,
    containerVariants,
    itemVariants,
  };
};
