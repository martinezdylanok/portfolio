import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export interface CommonViewportAnimationConfig {
   initialY?: number;
   duration?: number;
   delay?: number;
   viewportAmount?: number;
}

export interface UseCommonViewportAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export const useCommonViewportAnimations = (config: CommonViewportAnimationConfig = {}): UseCommonViewportAnimationsReturn => {
   const { initialY = 100, duration = 0.5, delay, viewportAmount = 0.2 } = config;

   const initial: TargetAndTransition = { y: initialY, opacity: 0 };
   const whileInView: TargetAndTransition = { y: 0, opacity: 1 };
   const transition: Transition = {
      duration,
      ease: "easeOut" as const,
      ...(delay !== undefined && { delay }),
   };
   const viewport: ViewportOptions = { once: true, amount: viewportAmount };

   return {
      initial,
      whileInView,
      transition,
      viewport,
   };
};
