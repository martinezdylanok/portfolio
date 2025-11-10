import type { MotionValue } from "framer-motion";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export interface UseAboutMeScrollAnimationsReturn {
   y: MotionValue<number>;
   textBottom: MotionValue<string>;
   textOpacity: MotionValue<number>;
}

export const useAboutMeScrollAnimations = (): UseAboutMeScrollAnimationsReturn => {
   const { scrollY } = useScroll();

   useMotionValueEvent(scrollY, "change", (value) => {
      console.log(value);
   });

   // Animations for upper aboutMe
   const y = useTransform(scrollY, [0, 600], [0, 400]);
   const textBottom = useTransform(scrollY, [300, 600], ["0", "10%"]);
   const textOpacity = useTransform(scrollY, [400, 600], [0, 1]);

   return {
      y,
      textBottom,
      textOpacity,
   };
};
