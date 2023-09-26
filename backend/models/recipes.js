const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// Create a new recipe
router.post('/recipes', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create recipe' });
  }
});

// Get all recipes
router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// Update a recipe by ID
router.put('/recipes/:id', async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update recipe' });
  }
});

// Delete a recipe by ID
router.delete('/recipes/:id', async (req, res) => {
  try {
    await Recipe.findByIdAndRemove(req.params.id);
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});

module.exports = router;
