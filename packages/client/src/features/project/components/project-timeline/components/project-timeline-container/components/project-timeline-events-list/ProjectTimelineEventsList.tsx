// TODO: Turn divs into cards that can be read to see more details of project's events.
// TODO: Check transition of colors while changing the theme of the site.
import { motion } from "framer-motion";
import { PROJECT_TIMELINE_EVENTS_LIST_ARIA_LABEL, ProjectTimelineEventsListProps } from "./data/projectTimelineEventsListData";
import { useProjectTimelineScrollAnimations } from "./utils/useProjectTimelineScrollAnimations";

const ProjectTimelineEventsList = ({ project }: ProjectTimelineEventsListProps) => {
   const { containerRef, horizontalOpacity, bars } = useProjectTimelineScrollAnimations();

   return (
      <div ref={containerRef} className="project__timeline-events-list relative" aria-label={PROJECT_TIMELINE_EVENTS_LIST_ARIA_LABEL}>
         <motion.div
            className="project__timeline-events-list-horizontal-bar h-1.25 absolute z-10 w-full bg-heading"
            style={{
               opacity: horizontalOpacity,
            }}
         ></motion.div>
         <div className="project__timeline-events-list-bars h-1.25 w-2/2 absolute">
            <motion.div
               className="project__timeline-events-list-bar project__timeline-events-list-bar--1 w-0.75 absolute left-2/10 bg-heading"
               style={{
                  height: bars[0].height,
                  opacity: bars[0].opacity,
               }}
            >
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--1 absolute -left-12.5 w-50 flex flex-col text-heading" style={{ top: "100%", opacity: bars[0].opacity }}>
                  <h3 className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-2xl">{project.project_timeline_event_01_title}</h3>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-xl">{project.project_timeline_event_01}</span>
               </motion.div>
            </motion.div>

            <motion.div
               className="project__timeline-events-list-bar project__timeline-events-list-bar--2 w-0.75 absolute bottom-0 left-4/10 bg-heading"
               style={{
                  height: bars[1].height,
                  opacity: bars[1].opacity,
               }}
            >
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--2 absolute -left-12.5 w-50 flex flex-col text-heading" style={{ bottom: "100%", opacity: bars[1].opacity }}>
                  <h3 className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-2xl">{project.project_timeline_event_02_title}</h3>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-xl">{project.project_timeline_event_02}</span>
               </motion.div>
            </motion.div>

            <motion.div
               className="project__timeline-events-list-bar project__timeline-events-list-bar--3 w-0.75 absolute left-5/10 bg-heading"
               style={{
                  height: bars[2].height,
                  opacity: bars[2].opacity,
               }}
            >
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--3 absolute -left-12.5 w-50 flex flex-col text-heading" style={{ top: "100%", opacity: bars[2].opacity }}>
                  <h3 className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-2xl">{project.project_timeline_event_03_title}</h3>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-xl">{project.project_timeline_event_03}</span>
               </motion.div>
            </motion.div>

            <motion.div
               className="project__timeline-events-list-bar project__timeline-events-list-bar--4 w-0.75 absolute bottom-0 left-6/10 bg-heading"
               style={{
                  height: bars[3].height,
                  opacity: bars[3].opacity,
               }}
            >
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--4 absolute -left-12.5 w-50 flex flex-col text-heading" style={{ bottom: "100%", opacity: bars[3].opacity }}>
                  <h3 className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-2xl">{project.project_timeline_event_04_title}</h3>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-xl">{project.project_timeline_event_04}</span>
               </motion.div>
            </motion.div>

            <motion.div
               className="project__timeline-events-list-bar project__timeline-events-list-bar--5 w-0.75 absolute left-8/10 bg-heading"
               style={{
                  height: bars[4].height,
                  opacity: bars[4].opacity,
               }}
            >
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--5 absolute -left-12.5 w-50 flex flex-col text-heading" style={{ top: "100%", opacity: bars[4].opacity }}>
                  <h3 className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-2xl">{project.project_timeline_event_05_title}</h3>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-xl">{project.project_timeline_event_05}</span>
               </motion.div>
            </motion.div>
         </div>
      </div>
   );
};

export default ProjectTimelineEventsList;
