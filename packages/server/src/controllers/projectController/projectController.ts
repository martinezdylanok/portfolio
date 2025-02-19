import { dbQuery } from "../../config/databaseConfig.js";

export const getProjectByName = async (req: any, res: any) => {
   const projectName = req.params.projectName;

   if (!projectName) {
      return res.status(400).json({ message: "Project name is required" });
   }

   try {
      const result = await dbQuery("SELECT * FROM projects WHERE LOWER(project_name) = $1", [projectName.toLowerCase()]);

      if (result.rows.length === 0) {
         return res.status(404).json({ message: `Project with name ${projectName} not found` });
      } else {
         return res.json(result.rows[0]);
      }
   } catch (error) {
      console.error("Error fetching project:", error);
      return res.status(500).json({ message: "Internal server error" });
   }
};
