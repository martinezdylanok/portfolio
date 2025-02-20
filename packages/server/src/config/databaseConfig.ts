import pkg from "pg";
import dotenv from "dotenv";
import PoolConfigInterface from "./interfaces/databaseConfigInterface.js";
dotenv.config();

const { Pool } = pkg;

const poolConfig: PoolConfigInterface = {
   host: process.env.DB_HOST as string,
   user: process.env.DB_USER as string,
   password: process.env.DB_PASSWORD as string,
   database: process.env.DB_NAME as string,
   port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
   max: process.env.DB_MAX ? parseInt(process.env.DB_MAX, 10) : 10,
   idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT ? parseInt(process.env.DB_IDLE_TIMEOUT, 10) : 30000,
   ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined,
};

if (!poolConfig.host || !poolConfig.user || !poolConfig.password || !poolConfig.database) {
   throw new Error("Database configuration environment variables are not set properly.");
}

const pool = new Pool(poolConfig);

pool.on("error", (err: Error) => {
   console.error("Unexpected error on idle client", err);
   process.exit(-1);
});

export const dbQuery = (text: string, params?: any[]): Promise<pkg.QueryResult> => {
   return pool.query(text, params);
};

export default pool;
