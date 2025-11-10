import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export interface UseProjectsListScrollAnimationReturn {
   animate: TargetAndTransition;
   transition: Transition;
}

export interface UseProjectsListListAnimationReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export const useProjectsListScrollAnimation = (): UseProjectsListScrollAnimationReturn => {
   const animate: TargetAndTransition = { x: [0, -5121.04] };
   const transition: Transition = {
      duration: 20,
      repeat: Infinity,
      ease: "linear" as const,
   };

   return {
      animate,
      transition,
   };
};

export const useProjectsListListAnimation = (): UseProjectsListListAnimationReturn => {
   const initial: TargetAndTransition = { y: 100, opacity: 0 };
   const whileInView: TargetAndTransition = { y: 0, opacity: 1 };
   const transition: Transition = { duration: 0.6, ease: "easeOut" as const };
   const viewport: ViewportOptions = { once: true, amount: 0.1 };

   return {
      initial,
      whileInView,
      transition,
      viewport,
   };
};
