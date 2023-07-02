import Project from "../models/Project.js"; // Adjust the path to the Project model file
// import any other dependencies if required

// Controller functions
const createProject = async (req, res) => {
  try {
    // Extract data from the request body
    const { id, pImg, ps1img, psub1img1, psub1img2, title, subTitle } =
      req.body;

    // Create a new project instance
    const project = new Project({
      id,
      pImg,
      ps1img,
      psub1img1,
      psub1img2,
      title,
      subTitle,
    });

    // Save the project to the database
    const savedProject = await project.save();

    // Return the saved project as the response
    res.status(201).json(savedProject);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ error: "Failed to create project" });
  }
};

const getProjects = async (req, res) => {
  try {
    // Retrieve all projects from the database
    const projects = await Project.find();

    // Return the projects as the response
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get projects" });
  }
};

const getProjectById = async (req, res) => {
  try {
    const projectId = req.params.id;

    // Retrieve the project from the database by its ID
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Return the project as the response
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get project" });
  }
};

const updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const updates = req.body;

    // Find the project by ID and update its properties
    const updatedProject = await Project.findByIdAndUpdate(projectId, updates, {
      new: true,
    });

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Return the updated project as the response
    res.json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update project" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    // Find the project by ID and remove it from the database
    const deletedProject = await Project.findByIdAndRemove(projectId);

    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Return the deleted project as the response
    res.json(deletedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete project" });
  }
};

// Export the controller functions
export {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
