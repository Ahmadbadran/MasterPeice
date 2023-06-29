import express from "express";
import {
  createFormEntry,
  getAllFormEntries,
  getFormEntryById,
  deleteFormEntry,
} from "../controllers/contact.js";

const router = express.Router();

// Routes
router.post("/", createFormEntry);
router.get("/", getAllFormEntries);
router.get("/:id", getFormEntryById);
router.delete("/:id", deleteFormEntry);

export default router;
