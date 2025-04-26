const allowedOrigin = process.env.CORS_ALLOWED_ORIGIN || "http://localhost:5173";

console.log(`[ServerData] CORS Origin configured for: ${allowedOrigin}`);

export const corsOptions = {
   origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      if (!origin || allowedOrigin === origin) {
         callback(null, true);
      } else {
         console.error(`[CORS] Blocked origin: ${origin}. Allowed: ${allowedOrigin}`);
         callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
   },
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true,
   optionsSuccessStatus: 200,
};
