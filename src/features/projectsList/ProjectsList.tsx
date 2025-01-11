// TODO: Create the logic for fetching the project's overview video from the project component.

import { PROJECT_LIST_TEMPORAL } from "./data/projectListData";

const ProjectsList = () => {
   return (
      <main>
         <h1 className="projects-list__header">Some of my work</h1>
         <div className="projects-list__container" aria-label="Projects list container">
            <ul className="projects-list__list">
               {PROJECT_LIST_TEMPORAL.map((project) => (
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
