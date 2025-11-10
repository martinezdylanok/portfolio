import { motion } from "framer-motion";
import ProjectTimelineEventsList from "./components/project-timeline-events-list/ProjectTimelineEventsList";
import { PROJECT_TIMELINE_CONTAINER_ARIA_LABEL, PROJECT_TIMELINE_CONTAINER_TITLE_TEXT, ProjectTimelineContainerProps } from "./data/projectTimelineContainerData";
import { useProjectTimelineContainerAnimations } from "./utils/useProjectTimelineContainerAnimations";

const ProjectTimelineContainer = ({ project }: ProjectTimelineContainerProps) => {
   const { initial, whileInView, transition, viewport } = useProjectTimelineContainerAnimations();

   return (
      <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="project__timeline-container flex flex-col" aria-label={PROJECT_TIMELINE_CONTAINER_ARIA_LABEL}>
         <h2 className="project__timeline-container-title font-hanken-grotesk text-8xl font-bold mb-12 text-heading">
            {PROJECT_TIMELINE_CONTAINER_TITLE_TEXT.split(" ")[0]} <br /> {PROJECT_TIMELINE_CONTAINER_TITLE_TEXT.split(" ")[1]}
         </h2>
         <div className="project__timeline-container-inner my-50" data-testid="timeline-inner-container">
            <ProjectTimelineEventsList project={project} />
         </div>
      </motion.div>
   );
};

export default ProjectTimelineContainer;
