import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

export interface UseProjectMainCoverScrollAnimationsReturn {
   y: MotionValue<number>;
   opacity: MotionValue<number>;
}

export const useProjectMainCoverScrollAnimations = (): UseProjectMainCoverScrollAnimationsReturn => {
   const { scrollY } = useScroll();

   const y = useTransform(scrollY, [0, 75], [30, 0]);
   const progress = useTransform(scrollY, [0, 30], [0, 1]);
   const opacity = useTransform(progress, [0, 0.9, 1], [0, 0.5, 1]);

   return {
      y,
      opacity,
   };
};
