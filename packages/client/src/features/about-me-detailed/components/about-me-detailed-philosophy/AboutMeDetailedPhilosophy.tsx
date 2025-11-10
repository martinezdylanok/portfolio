import { motion } from "framer-motion";
import { CATEGORY_DESCRIPTION, CATEGORY_NAME, PHILOSOPHY_DISCLAIMER } from "../../../about-me/data/aboutMeData";
import AboutMeDetailedPrinciplesList from "./components/about-me-detailed-principles-list/AboutMeDetailedPrinciplesList";
import { useAboutMeDetailedPhilosophyAnimations } from "./utils/useAboutMeDetailedPhilosophyAnimations";

const AboutMeDetailedPhilosophy = () => {
   const { initial: headerInitial, whileInView: headerWhileInView, transition: headerTransition, viewport: headerViewport } = useAboutMeDetailedPhilosophyAnimations();
   const { initial: contentInitial, whileInView: contentWhileInView, transition: contentTransition, viewport: contentViewport } = useAboutMeDetailedPhilosophyAnimations();

   return (
      <motion.div className="about-me-detailed__philosophy flex flex-col text-right py-25 bg-section">
         <motion.div initial={headerInitial} whileInView={headerWhileInView} transition={headerTransition} viewport={headerViewport} className="about-me-detailed__philosophy-header flex flex-col gap-12.5 min-w-screen min-h-screen">
            <h3 className="about-me-detailed__philosophy-title font-hanken-grotesk text-[200px] text-heading font-bold leading-none">{CATEGORY_NAME[1]}</h3>
            <div className="about-me-detailed__philosophy-icon-container flex flex-col h-full self-center items-center justify-center">
               <span className="about-me-detailed__philosophy-icon block w-[100px] h-[200px] bg-heading"></span>
               <span className="about-me-detailed__philosophy-description font-hanken-grotesk font-semibold text-2xl text-accent mt-4">{CATEGORY_DESCRIPTION[0]}</span>
            </div>
         </motion.div>
         <motion.div initial={contentInitial} whileInView={contentWhileInView} transition={contentTransition} viewport={contentViewport} className="about-me-detailed__philosophy-content flex flex-col">
            <span className="about-me-detailed__philosophy-disclaimer font-hanken-grotesk font-medium max-w-1/2 pb-25 self-start text-left text-2xl text-muted mt-4">{PHILOSOPHY_DISCLAIMER}</span>
            <AboutMeDetailedPrinciplesList />
         </motion.div>
      </motion.div>
   );
};

export default AboutMeDetailedPhilosophy;
