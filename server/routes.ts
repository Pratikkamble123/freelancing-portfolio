import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Guestbook Routes
  app.get(api.guestbook.list.path, async (_req, res) => {
    const entries = await storage.getGuestbookEntries();
    res.json(entries);
  });

  app.post(api.guestbook.create.path, async (req, res) => {
    try {
      const input = api.guestbook.create.input.parse(req.body);
      const entry = await storage.createGuestbookEntry(input);
      res.status(201).json(entry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
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
