const express = require('express');
const exampleController = require('../controllers/exampleController');

const router = express.Router();

// Define a route to get examples
router.get('/examples', exampleController.getExamples);

// Define a route to create an example
router.post('/examples', exampleController.createExample);

// Define a route to get a specific example by ID
router.get('/examples/:id', exampleController.getExampleById);

// Define a route to update an example by ID
router.put('/examples/:id', exampleController.updateExampleById);

// Define a route to delete an example by ID
router.delete('/examples/:id', exampleController.deleteExampleById);

module.exports = router;