// TODO: Create the logic for fetching the project's overview video from the project component.

const ProjectsList = () => {
   return (
      <main>
         <h1 className="projects-list__header">Some of my work</h1>
         <div className="projects-list__container" aria-label="Projects list container">
            <ul className="projects-list__list">
               <li className="project-list__list-item">Project 1</li>
               <li className="project-list__list-item">Project 2</li>
               <li className="project-list__list-item">Project 3</li>
               <li className="project-list__list-item">Project 4</li>
               <li className="project-list__list-item">Project 5</li>
            </ul>
         </div>
      </main>
   );
};

export default ProjectsList;
