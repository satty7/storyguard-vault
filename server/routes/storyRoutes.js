const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');

router.post('/publish', storyController.publishStory);
router.get('/', storyController.getAllStories);
router.delete('/:id', storyController.deleteStory);

module.exports = router;
