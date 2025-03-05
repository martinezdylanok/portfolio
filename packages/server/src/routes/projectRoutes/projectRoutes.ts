import { Router } from "express";
import { getAllProjects, getProjectByName } from "../../controllers/projectController/projectController.js";

const projectRoutes = Router();

projectRoutes.get("/", getAllProjects);
projectRoutes.get("/:projectName", getProjectByName);

export default projectRoutes;
