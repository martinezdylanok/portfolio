import { useCallback, useState } from "react";

export const useAnimatedToggle = (actionCallback: () => void, animationDuration: number = 1500) => {
   const [isAnimating, setIsAnimating] = useState(false);

   const handlePress = useCallback(() => {
      actionCallback();
      setIsAnimating(true);
      setTimeout(() => {
         setIsAnimating(false);
      }, animationDuration);
   }, [actionCallback, animationDuration]);

   return { isAnimating, handlePress };
};
