import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";
import { useRef } from "react";
import { useBarTransforms } from "./useBarTransforms";

export interface TimelineBarTransforms {
   height: MotionValue<string>;
   opacity: MotionValue<number>;
}

export interface UseProjectTimelineScrollAnimationsReturn {
   containerRef: RefObject<HTMLDivElement | null>;
   horizontalOpacity: MotionValue<number>;
   bars: TimelineBarTransforms[];
}

export const useProjectTimelineScrollAnimations = (): UseProjectTimelineScrollAnimationsReturn => {
   const containerRef = useRef<HTMLDivElement>(null);

   // Bind progress to this section only (complete by the time viewport hits container center)
   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end center"] });

   // Horizontal bar opacity directly follows section progress
   const horizontalOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

   // Staggered thresholds aligned with horizontal opacity/progress
   const bar1 = useBarTransforms(scrollYProgress, 0.2, 2); // left-2/10 (top anchored)
   const bar2 = useBarTransforms(scrollYProgress, 0.4, 4); // left-4/10 (bottom anchored)
   const bar3 = useBarTransforms(scrollYProgress, 0.55, 2); // left-5/10 (top anchored)
   const bar4 = useBarTransforms(scrollYProgress, 0.7, 4); // left-6/10 (bottom anchored)
   const bar5 = useBarTransforms(scrollYProgress, 0.85, 2); // left-8/10 (top anchored)

   return {
      containerRef,
      horizontalOpacity,
      bars: [bar1, bar2, bar3, bar4, bar5],
   };
};
