import { Pool, PoolConfig, QueryResult } from "pg";
import dotenv from "dotenv";

dotenv.config();

const poolConfig: PoolConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432, // Default to PostgreSQL port 5432
  max: process.env.DB_MAX ? parseInt(process.env.DB_MAX, 10) : 10, // Default to 10
  idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT ? parseInt(process.env.DB_IDLE_TIMEOUT, 10) : 30000, // Default to 30000 ms
};

if (!poolConfig.host || !poolConfig.user || !poolConfig.password || !poolConfig.database) {
  throw new Error("Database configuration environment variables are not set properly.");
}

const pool = new Pool(poolConfig);

pool.on('error', (err: Error) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export const query = (text: string, params?: any[]): Promise<QueryResult> => {
  return pool.query(text, params);
};