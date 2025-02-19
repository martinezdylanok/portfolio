import { Router } from "express";
import { getProjectByName } from "../../controllers/projectController/projectController.js";

const projectRoutes = Router();

projectRoutes.get("/:projectName", getProjectByName);

export default projectRoutes;
