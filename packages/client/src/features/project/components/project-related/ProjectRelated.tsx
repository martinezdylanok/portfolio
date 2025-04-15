import { useThemeContext } from "../../../../utils/hooks/useTheme";
import ProjectRelatedContainer from "./components/project-related-container/ProjectRelatedContainer";
import { PROJECT_RELATED_ARIA_LABEL } from "./data/projectRelatedData";

const ProjectRelated = () => {
   const { mode } = useThemeContext();

   // TODO: Put these definitions into tailwind's config
   const bgColors = mode === "light" ? "bg-[#D7E3FC]" : "bg-[#C1D3FE]";

   return (
      <section className={`mb-50 ${bgColors} project__related`} aria-label={PROJECT_RELATED_ARIA_LABEL}>
         <ProjectRelatedContainer />
      </section>
   );
};

export default ProjectRelated;
