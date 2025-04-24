import dotenv from "dotenv";
import path from "path";
import pkg from "pg";
import PoolConfigInterface from "./interfaces/databaseConfigInterface.js";

const envPath = process.env.NODE_ENV === "development" ? path.resolve(process.cwd(), ".env.development") : path.resolve(process.cwd(), ".env");

console.log(`[databaseConfig] Loading environment variables from: ${envPath}`);
const dotenvResult = dotenv.config({ path: envPath });

if (dotenvResult.error) {
   console.error(`[databaseConfig] Error loading .env file from ${envPath}:`, dotenvResult.error);
   throw new Error(`Failed to load environment variables from ${envPath}`);
}

const { Pool } = pkg;

const poolConfig: PoolConfigInterface = {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
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
