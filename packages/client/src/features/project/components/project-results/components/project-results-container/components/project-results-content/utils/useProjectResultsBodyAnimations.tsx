import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export interface UseProjectResultsBodyAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export const useProjectResultsBodyAnimations = (): UseProjectResultsBodyAnimationsReturn => {
   const initial: TargetAndTransition = { y: 50, opacity: 0 };
   const whileInView: TargetAndTransition = { y: 0, opacity: 1 };
   const transition: Transition = { duration: 0.5, ease: "easeOut" as const };
   const viewport: ViewportOptions = { once: true, amount: 0.2 };

   return {
      initial,
      whileInView,
      transition,
      viewport,
   };
};
