import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export interface UseAboutMeHeaderTitleAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export interface UseAboutMeHeaderImageAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export interface UseAboutMeContentAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export const useAboutMeHeaderTitleAnimations = (): UseAboutMeHeaderTitleAnimationsReturn => {
   const initial: TargetAndTransition = { y: 50, opacity: 0 };
   const whileInView: TargetAndTransition = { y: 0, opacity: 1 };
   const transition: Transition = { duration: 0.5, ease: "easeOut" as const, delay: 0.3 };
   const viewport: ViewportOptions = { once: true, amount: 0.2 };

   return {
      initial,
      whileInView,
      transition,
      viewport,
   };
};

export const useAboutMeHeaderImageAnimations = (): UseAboutMeHeaderImageAnimationsReturn => {
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

export const useAboutMeContentAnimations = (): UseAboutMeContentAnimationsReturn => {
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
