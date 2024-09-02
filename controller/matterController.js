const Matter = require("../models/matter");

// Create a new matter
const createMatter = async (req, res) => {
  try {
    const newMatter = await Matter.create(req.body);
    res.status(201).json(newMatter);
  } catch (err) {
    res.status(500).json({ error: "Failed to create matter" });
  }
};

// Get all matters
const getAllMatters = async (req, res) => {
  try {
    const matters = await Matter.find().populate("clientId", "name").populate("assignedAssociate", "username");
    res.status(200).json(matters);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve matters" });
  }
};


// Update a matter
const updateMatter = async (req, res) => {
  try {
    const updatedMatter = await Matter.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedMatter) {
      return res.status(404).json({ error: "Matter not found" });
    }
    res.status(200).json(updatedMatter);
  } catch (err) {
    res.status(500).json({ error: "Failed to update matter" });
  }
};

// Delete a matter
const deleteMatter = async (req, res) => {
  try {
    const deletedMatter = await Matter.findByIdAndDelete(req.params.id);
    if (!deletedMatter) {
      return res.status(404).json({ error: "Matter not found" });
    }
    res.status(200).json({ message: "Matter deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete matter" });
  }
};

module.exports = {
  createMatter,
  getAllMatters,
  updateMatter,
  deleteMatter,
};
