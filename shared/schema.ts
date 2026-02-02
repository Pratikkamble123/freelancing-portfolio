import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const guestbookEntries = pgTable("guestbook_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// === BASE SCHEMAS ===
export const insertGuestbookEntrySchema = createInsertSchema(guestbookEntries).pick({
  name: true,
  message: true,
});

// === EXPLICIT API CONTRACT TYPES ===
export type GuestbookEntry = typeof guestbookEntries.$inferSelect;
export type InsertGuestbookEntry = z.infer<typeof insertGuestbookEntrySchema>;

export type CreateGuestbookEntryRequest = InsertGuestbookEntry;
export type GuestbookEntryResponse = GuestbookEntry;
