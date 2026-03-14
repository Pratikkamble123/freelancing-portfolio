import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { sendProjectEmail } from "./utils/sendEmail";
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Guestbook Routes
  app.get(api.guestbook.list.path, async (_req, res) => {
    const entries = await storage.getGuestbookEntries();
    res.json(entries);
  });



app.post("/api/guestbook", async (req, res) => {
  try {
    const newEntry = await storage.createGuestbookEntry(req.body);

    // 🔥 SEND EMAIL
    await sendProjectEmail(newEntry);

    res.status(201).json(newEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create inquiry" });
  }
});
  // Seed Data (Check if empty then seed)
  const existing = await storage.getGuestbookEntries();
  if (existing.length === 0) {
    await storage.createGuestbookEntry({
      name: "Paweł Szostak",
      message: "Welcome to my portfolio! Feel free to look around.",
    });
    await storage.createGuestbookEntry({
      name: "Visitor",
      message: "Love the dark mode design. Very clean!",
    });
    await storage.createGuestbookEntry({
      name: "Recruiter",
      message: "Impressive projects. Let's connect.",
    });
  }

  return httpServer;
}
