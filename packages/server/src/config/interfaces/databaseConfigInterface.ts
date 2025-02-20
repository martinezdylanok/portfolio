interface PoolConfigInterface {
   host: string;
   user: string;
   password: string;
   database: string;
   port?: number;
   max?: number;
   idleTimeoutMillis?: number;
   ssl?: any;
}

export default PoolConfigInterface;
