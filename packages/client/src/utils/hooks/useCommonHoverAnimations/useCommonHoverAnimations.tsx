import type { Transition } from "framer-motion";

export interface UseCommonHoverAnimationsReturn {
   whileHover: { scale: number };
   whileTap: { scale: number };
   transition: Transition;
}

export const useCommonHoverAnimations = (): UseCommonHoverAnimationsReturn => {
   const whileHover = { scale: 1.05 };
   const whileTap = { scale: 0.95 };
   const transition: Transition = { duration: 0.2, ease: "easeOut" as const };

   return {
      whileHover,
      whileTap,
      transition,
   };
};
