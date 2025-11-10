import type { TargetAndTransition, Transition } from "framer-motion";
import { useState } from "react";

export interface UseHeaderLogoAnimationsReturn {
   isHovered: boolean;
   handleMouseEnter: () => void;
   handleMouseLeave: () => void;
   imageAnimation: TargetAndTransition;
   imageTransition: Transition;
   titleAnimation: TargetAndTransition;
   titleTransition: Transition;
}

export const useHeaderLogoAnimations = (): UseHeaderLogoAnimationsReturn => {
   const [isHovered, setIsHovered] = useState<boolean>(false);

   const handleMouseEnter = (): void => {
      setIsHovered(true);
   };

   const handleMouseLeave = (): void => {
      setIsHovered(false);
   };

   const imageAnimation: TargetAndTransition = {
      y: isHovered ? -5 : 0,
      borderBottomWidth: isHovered ? 5 : 0,
      paddingBottom: isHovered ? 3 : 0,
   };

   const imageTransition: Transition = {
      duration: isHovered ? 0.3 : 0.4,
      ease: "easeInOut" as const,
   };

   const titleAnimation: TargetAndTransition = {
      top: isHovered ? "105%" : "1%",
      opacity: isHovered ? [0, 0.7, 1] : [0.3, 0, 0],
   };

   const titleTransition: Transition = {
      top: {
         duration: 0.4,
         ease: "easeInOut" as const,
      },
      opacity: {
         duration: 0.4,
         times: [0, 0.9, 1],
         ease: "easeInOut" as const,
      },
   };

   return {
      isHovered,
      handleMouseEnter,
      handleMouseLeave,
      imageAnimation,
      imageTransition,
      titleAnimation,
      titleTransition,
   };
};
