import Router from "express";
import getProjectByName from "./data/projectRoutesData.mock.js";

const projectRoutes = Router();

projectRoutes.get("/:projectName", (req, res) => {
   const projectName = req.params.projectName.toLocaleLowerCase();
   const project = getProjectByName(projectName);
   if (!project) {
      res.status(404).send(`Project with id ${projectName} not found`);
   } else {
      res.json(project);
   }
});

export default projectRoutes;
