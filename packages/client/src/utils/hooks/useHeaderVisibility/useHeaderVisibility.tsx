import { useEffect, useRef, useState } from "react";

export const useHeaderVisibility = () => {
   const [isVisible, setIsVisible] = useState(true);
   const previousScrollPosition = useRef(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPosition = window.pageYOffset;
         if (previousScrollPosition.current > currentScrollPosition || currentScrollPosition < 10) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
         previousScrollPosition.current = currentScrollPosition;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return isVisible;
};
