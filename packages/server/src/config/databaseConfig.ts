import pkg from "pg";
import PoolConfigInterface from "./interfaces/databaseConfigInterface.js";

const { Pool } = pkg;

const poolConfig: PoolConfigInterface = {
   host: process.env.POSTGRES_HOST,
   user: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DB,
   port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT, 10) : 5432,
   max: 5, // Max ammount of connections
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
