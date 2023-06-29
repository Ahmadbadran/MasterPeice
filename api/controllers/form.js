import Form from "../models/Form.js";

// @desc      Create a new form entry
// @route     POST /api/forms
// @access    Public
const createFormEntry = async (req, res) => {
  try {
    const { id, name, email, subject, notes } = req.body;

    const formEntry = new Form({
      id,
      name,
      email,
      subject,
      notes,
    });

    const savedFormEntry = await formEntry.save();

    res.status(201).json(savedFormEntry);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// @desc      Get all form entries
// @route     GET /api/forms
// @access    Public
const getAllFormEntries = async (req, res) => {
  try {
    const formEntries = await Form.find();
    res.json(formEntries);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// @desc      Get a single form entry by ID
// @route     GET /api/forms/:id
// @access    Public
const getFormEntryById = async (req, res) => {
  try {
    const formEntry = await Form.findById(req.params.id);
    if (formEntry) {
      res.json(formEntry);
    } else {
      res.status(404).json({ error: "Form entry not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// @desc      Delete a form entry by ID
// @route     DELETE /api/forms/:id
// @access    Public
const deleteFormEntry = async (req, res) => {
  try {
    const formEntry = await Form.findById(req.params.id);
    if (formEntry) {
      await formEntry.remove();
      res.json({ message: "Form entry deleted successfully" });
    } else {
      res.status(404).json({ error: "Form entry not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export {
  createFormEntry,
  getAllFormEntries,
  getFormEntryById,
  deleteFormEntry,
};
