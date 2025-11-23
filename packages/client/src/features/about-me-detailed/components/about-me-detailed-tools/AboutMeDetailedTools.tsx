import { motion } from "framer-motion";
import { CATEGORY_DESCRIPTION, CATEGORY_NAME, TOOL_CATEGORIES } from "../../../about-me/data/aboutMeData";
import AboutMeDetailedToolCategory from "./components/about-me-detailed-tool-category/AboutMeDetailedToolCategory";
import { useAboutMeDetailedToolsHeaderAnimations } from "./utils/useAboutMeDetailedToolsHeaderAnimations";

const AboutMeDetailedTools = () => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedToolsHeaderAnimations();

   return (
      <div className="about-me-detailed__tools flex flex-col py-25 bg-card">
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="about-me-detailed__tools-header flex flex-col gap-12.5 min-w-screen min-h-screen">
            <h3 className="about-me-detailed__tools-title font-hanken-grotesk text-[200px] text-heading font-bold leading-none">{CATEGORY_NAME[2]}</h3>
            <div className="about-me-detailed__tools-icon-container flex flex-col h-full self-center items-center justify-center">
               <span className="about-me-detailed__tools-icon block w-[200px] h-[200px] rounded-full bg-heading"></span>
               <span className="about-me-detailed__tools-description font-hanken-grotesk font-semibold text-2xl text-accent mt-4">{CATEGORY_DESCRIPTION[1]}</span>
            </div>
         </motion.div>
         {TOOL_CATEGORIES.map((category) => (
            <AboutMeDetailedToolCategory key={category.title} category={category} />
         ))}
      </div>
   );
};

export default AboutMeDetailedTools;
