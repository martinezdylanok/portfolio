import { useEffect, useState } from "react";
import { useHeaderVisibility } from "../useHeaderVisibility/useHeaderVisibility";

export const useHeaderProjectsVisibilityTransition = () => {
   const isVisible = useHeaderVisibility();

   const [projectsAreVisible, setProjectsAreVisible] = useState(false);
   const [projectsAreClosing, setProjectsAreClosing] = useState(false);

   useEffect(() => {
      if (!isVisible && projectsAreVisible) {
         setProjectsAreClosing(true);
         setTimeout(() => {
            setProjectsAreVisible(false);
            setProjectsAreClosing(false);
         }, 500);
      }
   }, [isVisible, projectsAreVisible]);

   return {
      projectsAreVisible,
      projectsAreClosing,
      setProjectsAreVisible,
      setProjectsAreClosing,
   };
};
