import express from "express";
import cors from "cors";
import path from "path";
import projectRoutes from "../routes/projectRoutes/projectRoutes.js";

const server = express();

server.use(cors());
server.use(express.json());

/* Routers */
server.use(express.static(path.join(__dirname, "../client/dist")));
server.get("*", (__, res) => {
   res.sendFile(path.join(__dirname, ".../client/dist", "index.html"));
});
server.use("/projects", projectRoutes);

export default server;
