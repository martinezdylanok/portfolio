export const corsOptions = {
   origin: process.env.NODE_ENV === "production" ? "https://yourdomain.com" : "http://localhost:5173", // The server
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true,
};
