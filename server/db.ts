// import dotenv from "dotenv";

// // FORCE dotenv load here (ESM-safe)
// dotenv.config({
//   path: "C:/Users/hp/Downloads/Developer-Assets/Developer-Assets/.env",
// });

// import { drizzle } from "drizzle-orm/node-postgres";
// import pg from "pg";
// import * as schema from "@shared/schema";

// const { Pool } = pg;

// console.log("DB URL FROM DB.TS =", process.env.DATABASE_URL);

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL must be set.");
// }

// export const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export const db = drizzle(pool, { schema });
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set");
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // required for Neon
  },
});

export const db = drizzle(pool, { schema });
