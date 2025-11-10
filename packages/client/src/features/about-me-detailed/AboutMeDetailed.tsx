import { motion } from "framer-motion";
import { ABOUT_ME_DETAILED_ARIA_LABEL } from "../about-me/data/aboutMeData";
import AboutMeDetailedIntro from "./components/about-me-detailed-intro/AboutMeDetailedIntro";
import AboutMeDetailedPhilosophy from "./components/about-me-detailed-philosophy/AboutMeDetailedPhilosophy";
import AboutMeDetailedStory from "./components/about-me-detailed-story/AboutMeDetailedStory";
import AboutMeDetailedTools from "./components/about-me-detailed-tools/AboutMeDetailedTools";

const AboutMeDetailed = () => {
   return (
      <motion.section id="about" className={`about-me-detailed flex flex-col justify-center items-center`} aria-label={ABOUT_ME_DETAILED_ARIA_LABEL}>
         <div className="about-me-detailed__content grid content-center">
            <AboutMeDetailedIntro />
            <AboutMeDetailedPhilosophy />
            <AboutMeDetailedTools />
            <AboutMeDetailedStory />
         </div>
      </motion.section>
   );
};

export default AboutMeDetailed;
