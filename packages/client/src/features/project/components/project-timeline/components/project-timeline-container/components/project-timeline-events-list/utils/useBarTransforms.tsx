import type { MotionValue } from "framer-motion";
import { useTransform } from "framer-motion";

export interface BarTransforms {
   height: MotionValue<string>;
   opacity: MotionValue<number>;
}

export const useBarTransforms = (scrollYProgress: MotionValue<number>, start: number, endHeightVh: number): BarTransforms => {
   const height = useTransform(scrollYProgress, [start, Math.min(start + 0.15, 1)], ["0vh", `${endHeightVh}vh`]);
   const opacity = useTransform(scrollYProgress, [start, Math.min(start + 0.1, 1)], [0, 1]);
   return { height, opacity };
};
