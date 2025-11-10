import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export interface UseAboutMeDetailedIntroTitleAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export interface UseAboutMeDetailedIntroTextAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export interface UseAboutMeDetailedIntroImageAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export const useAboutMeDetailedIntroTitleAnimations = (): UseAboutMeDetailedIntroTitleAnimationsReturn => {
   const initial: TargetAndTransition = { x: -50, opacity: 0 };
   const whileInView: TargetAndTransition = { x: 0, opacity: 1 };
   const transition: Transition = { duration: 1, ease: "easeOut" as const };
   const viewport: ViewportOptions = { once: true, amount: 0.1 };

   return {
      initial,
      whileInView,
      transition,
      viewport,
   };
};

export const useAboutMeDetailedIntroTextAnimations = (delay: number): UseAboutMeDetailedIntroTextAnimationsReturn => {
   const initial: TargetAndTransition = { y: 50, opacity: 0 };
   const whileInView: TargetAndTransition = { y: 0, opacity: 1 };
   const transition: Transition = { duration: 0.6, ease: "easeOut" as const, delay };
   const viewport: ViewportOptions = { once: true, amount: 0.1 };

   return {
      initial,
      whileInView,
      transition,
      viewport,
   };
};

export const useAboutMeDetailedIntroImageAnimations = (): UseAboutMeDetailedIntroImageAnimationsReturn => {
   const initial: TargetAndTransition = { y: 100, opacity: 0 };
   const whileInView: TargetAndTransition = { y: 0, opacity: 1 };
   const transition: Transition = { duration: 1, ease: "easeOut" as const, delay: 1.2 };
   const viewport: ViewportOptions = { once: true, amount: 0.1 };

   return {
      initial,
      whileInView,
      transition,
      viewport,
   };
};
