import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import projectRoutes from "../routes/projectRoutes/projectRoutes.js";
import { corsOptions } from "./data/serverData.js";

const server = express();

/* Middlewares */
server.use(cors());
server.use(express.json());
server.use(cors(corsOptions));

/* Static files */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDistPath = path.join(__dirname, "../../../client/dist");
server.use(express.static(clientDistPath));

/* API Routes */
server.use("/api/projects", projectRoutes);

/* Catch all route */
server.get("*", (__, res) => {
   res.sendFile(path.join(clientDistPath, "index.html"));
});

export default server;
