// TODO: Create the logic for fetching the project's overview video from the project component.

import { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_TITLE, PROJECTS_LIST_TEMPORAL } from "./data/projectListData";

const ProjectsList = () => {
   return (
      <main>
         <h1 className="projects-list__header">{PROJECTS_LIST_TITLE}</h1>
         <div className="projects-list__container" aria-label={PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT}>
            <ul className="projects-list__list">
               {PROJECTS_LIST_TEMPORAL.map((project) => (
                  <li key={project.id} className="projects-list__list-item">
                     {project.name}
                  </li>
               ))}
            </ul>
         </div>
      </main>
   );
};

export default ProjectsList;
