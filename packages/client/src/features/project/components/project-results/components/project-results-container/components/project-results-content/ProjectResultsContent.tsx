import { useThemeContext } from "../../../../../../../../utils/hooks/useTheme";
import { PROJECT_RESULTS_CONTENT_ARIA_LABEL, PROJECT_RESULTS_CONTENT_TITLE, ProjectResultsContentProps } from "./data/projectResultsContentData";

const ProjectResultsContent = ({ project }: ProjectResultsContentProps) => {
   const { mode } = useThemeContext();

   // TODO: Put these definitions into tailwind's config
   const lighestColors = mode === "light" ? "text-[#ABC4FF40]" : "text-[#EDF2FB40]";
   const lightColors = mode === "light" ? "text-[#ABC4FF80]" : "text-[#EDF2FB80]";

   //TODO: Create stats for results in the database and fetch it here.
   return (
      <div className="grid grid-cols-2 grid-rows-2 project__results-content" aria-label={PROJECT_RESULTS_CONTENT_ARIA_LABEL}>
         <p className={`mt-12 text-2xl col-start-1 row-start-2 text-justify text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"} project__results-paragraph`} data-testid="results-content-paragraph">
            {project.project_final_results}
         </p>
         <div className={`flex gap-20 text-2xl col-start-2 col-end-3 row-start-2 place-self-center text-justify project__results`} data-testid="results-content-container">
            <div className="flex flex-col project_results-inner-container" data-testid="results-content-inner-container">
               <span className={`mb-6 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`}>CTR</span>
               <span className={`text-2xl font-semibold text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`}>12%</span>
            </div>
            <div className="flex flex-col project_results-inner-container" data-testid="results-content-inner-container">
               <span className={`mb-6 text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`}>Number of new clients</span>
               <span className={`text-2xl font-semibold text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`}>245</span>
            </div>
         </div>
         <div className="flex flex-col col-start-2 row-start-1 project__results-header" data-testid="results-content-header">
            <span className={`text-8xl -mb-6 -z-2 font-bold ${lighestColors}`}>{PROJECT_RESULTS_CONTENT_TITLE}</span>
            <span className={`text-8xl -mb-6 -z-1 font-bold ${lightColors}`}>{PROJECT_RESULTS_CONTENT_TITLE}</span>
            <h2 className={`text-8xl font-bold text-${mode === "light" ? "[#ABC4FF]" : "[#EDF2FB]"}`}>{PROJECT_RESULTS_CONTENT_TITLE}</h2>
         </div>
      </div>
   );
};

export default ProjectResultsContent;
