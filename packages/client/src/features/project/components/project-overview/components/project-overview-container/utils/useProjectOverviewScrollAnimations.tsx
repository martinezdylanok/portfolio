import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";
import { useRef } from "react";

export interface UseProjectOverviewScrollAnimationsReturn {
   containerRef: RefObject<HTMLDivElement | null>;
   scale: MotionValue<number>;
}

export const useProjectOverviewScrollAnimations = (): UseProjectOverviewScrollAnimationsReturn => {
   const containerRef = useRef<HTMLDivElement>(null);

   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });

   const scale = useTransform(scrollYProgress, [0, 0.3], [0.75, 1]);

   return {
      containerRef,
      scale,
   };
};
