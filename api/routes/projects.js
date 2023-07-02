import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/project.js"; // Adjust the path to the projectController file

const router = express.Router();

// Route to create a new project
router.post("/", createProject);

// Route to get all projects
router.get("/", getProjects);

// Route to get a project by ID
router.get("/:id", getProjectById);

// Route to update a project by ID
router.put("/:id", updateProject);

// Route to delete a project by ID
router.delete("/:id", deleteProject);

// Export the router
export default router;
