const clientOrigin = process.env.CLIENT_ORIGIN;

const allowedOrigins: string[] = [clientOrigin].filter((origin): origin is string => typeof origin === "string" && origin.length > 0);

if (allowedOrigins.length === 0) {
   console.warn("[ServerData] WARNING: No CLIENT_ORIGIN found in environment variables. CORS might block requests.");
}

console.log(`[ServerData] CORS Allowed Origins configured: ${allowedOrigins.join(", ")}`);

export const corsOptions = {
   origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      if (!origin || allowedOrigins.includes(origin)) {
         callback(null, true);
      } else {
         console.error(`[CORS] Blocked origin: ${origin}. Allowed: ${allowedOrigins.join(", ")}`);
         callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
   },
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true,
   optionsSuccessStatus: 200,
};
