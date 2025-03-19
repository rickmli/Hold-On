const ExampleModel = require("../models/comment.model");

// Get all examples
exports.getExamples = async (req, res) => {
  try {
    const examples = await ExampleModel.find();
    res.status(200).json(examples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new example
exports.createExample = async (req, res) => {
  const example = new ExampleModel(req.body);
  try {
    const savedExample = await example.save();
    res.status(201).json(savedExample);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
