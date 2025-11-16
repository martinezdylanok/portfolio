import { motion } from "framer-motion";
import { useThemeContext } from "../../../../utils/hooks/useThemeContext/useThemeContext";
import { CATEGORY_NAME, INTRO_TEXTS } from "../../../about-me/data/aboutMeData";
import { useAboutMeDetailedIntroImageAnimations, useAboutMeDetailedIntroTextAnimations, useAboutMeDetailedIntroTitleAnimations } from "./utils/useAboutMeDetailedIntroAnimations";

const AboutMeDetailedIntro = () => {
   const { theme } = useThemeContext();
   const { initial: titleInitial, whileInView: titleWhileInView, transition: titleTransition, viewport: titleViewport } = useAboutMeDetailedIntroTitleAnimations();
   const textAnimations0 = useAboutMeDetailedIntroTextAnimations(0);
   const textAnimations1 = useAboutMeDetailedIntroTextAnimations(0.3);
   const textAnimations2 = useAboutMeDetailedIntroTextAnimations(0.6);
   const textAnimations3 = useAboutMeDetailedIntroTextAnimations(0.9);
   const { initial: imageInitial, whileInView: imageWhileInView, transition: imageTransition, viewport: imageViewport } = useAboutMeDetailedIntroImageAnimations();

   return (
      <div className="about-me-detailed__intro grid relative py-25 min-w-screen min-h-screen bg-page">
         <motion.h3 initial={titleInitial} whileInView={titleWhileInView} transition={titleTransition} viewport={titleViewport} className="about-me-detailed__intro-title font-hanken-grotesk text-[200px] mb-12.5 text-heading font-bold leading-none">
            {CATEGORY_NAME[0]}
         </motion.h3>
         <div className="about-me-detailed__intro-texts grid grid-cols-4 grid-rows-2 mx-12.5">
            <motion.span initial={textAnimations0.initial} whileInView={textAnimations0.whileInView} transition={textAnimations0.transition} viewport={textAnimations0.viewport} className="about-me-detailed__intro-text font-hanken-grotesk font-medium text-justify text-2xl col-start-1 text-heading">
               {INTRO_TEXTS[0]}
            </motion.span>
            <motion.span initial={textAnimations1.initial} whileInView={textAnimations1.whileInView} transition={textAnimations1.transition} viewport={textAnimations1.viewport} className="about-me-detailed__intro-text font-hanken-grotesk font-medium text-justify text-2xl row-start-2 col-start-2 text-heading">
               {INTRO_TEXTS[1]}
            </motion.span>
            <motion.span initial={textAnimations2.initial} whileInView={textAnimations2.whileInView} transition={textAnimations2.transition} viewport={textAnimations2.viewport} className="about-me-detailed__intro-text font-hanken-grotesk font-medium text-justify text-2xl col-start-3 text-heading">
               {INTRO_TEXTS[2]}
            </motion.span>
            <motion.span initial={textAnimations3.initial} whileInView={textAnimations3.whileInView} transition={textAnimations3.transition} viewport={textAnimations3.viewport} className="about-me-detailed__intro-text font-hanken-grotesk font-medium text-justify text-2xl row-start-2 col-start-4 text-heading">
               {INTRO_TEXTS[3]}
            </motion.span>
         </div>
         <motion.img initial={imageInitial} whileInView={imageWhileInView} transition={imageTransition} viewport={imageViewport} src={theme === "light" ? "/dylan_light_mode.webp" : "/dylan_darkmode.webp"} className="about-me-detailed__intro-image max-w-1/4 absolute top-25 right-0 rotate-270" alt="Dylan Martinez portrait" />
      </div>
   );
};

export default AboutMeDetailedIntro;
