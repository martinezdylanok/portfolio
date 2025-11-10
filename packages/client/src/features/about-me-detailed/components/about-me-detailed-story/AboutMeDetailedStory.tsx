import { motion } from "framer-motion";
import { CATEGORY_DESCRIPTION, CATEGORY_NAME, STORY_IMAGES } from "../../../about-me/data/aboutMeData";
import { useAboutMeDetailedStoryAnimations } from "./utils/useAboutMeDetailedStoryAnimations";

const AboutMeDetailedStory = () => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedStoryAnimations();

   return (
      <div className="about-me-detailed__story flex flex-col text-right py-25 bg-section">
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="about-me-detailed__story-content flex flex-col gap-12.5 min-w-screen min-h-screen">
            <h3 className="about-me-detailed__story-title font-hanken-grotesk text-[200px] text-heading font-bold leading-none">{CATEGORY_NAME[3]}</h3>
            <div className="about-me-detailed__story-images-container flex flex-col gap-12.5 h-full self-center items-center justify-center">
               <div className="about-me-detailed__story-images flex gap-12.5">
                  {STORY_IMAGES.map((image) => (
                     <img key={image.src} className="about-me-detailed__story-image max-w-48 max-h-42 blur-xs cursor-pointer" src={image.src} alt={image.alt} />
                  ))}
               </div>
               <span className="about-me-detailed__story-description font-hanken-grotesk font-medium text-4xl text-accent">{CATEGORY_DESCRIPTION[2]}</span>
            </div>
         </motion.div>
      </div>
   );
};

export default AboutMeDetailedStory;
