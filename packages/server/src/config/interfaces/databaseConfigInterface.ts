interface PoolConfigInterface {
   host?: string;
   user?: string;
   password?: string;
   database?: string;
   port?: number;
   max?: number;
   idleTimeoutMillis?: number;
   ssl?: boolean | { rejectUnauthorized: boolean };
}

export default PoolConfigInterface;
