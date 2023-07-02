import { getReviews, createReview } from "../controllers/review.js";
import express from "express";
const router = express.Router();

// GET /reviews
router.get("/", getReviews);

// POST /reviews
router.post("/", createReview);

export default router;
