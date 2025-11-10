import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export interface UseAboutMeDetailedToolsHeaderAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export const useAboutMeDetailedToolsHeaderAnimations = (): UseAboutMeDetailedToolsHeaderAnimationsReturn => {
   const initial: TargetAndTransition = { y: 100, opacity: 0 };
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
