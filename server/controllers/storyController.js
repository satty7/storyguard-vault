const Story = require('../models/story');

function simulateBlockchainHash(title, content) {
    return "0x" + Buffer.from(title + content + Date.now()).toString('hex').slice(0, 64);
}

exports.publishStory = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const blockchainHash = simulateBlockchainHash(title, content);
        const story = new Story({ title, content, author, blockchainHash });
        await story.save();
        res.status(201).json({ message: "Story published", story });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllStories = async (req, res) => {
    try {
        const stories = await Story.find().sort({ timestamp: -1 });
        res.json(stories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteStory = async (req, res) => {
  try {
    const storyId = req.params.id;
    const deleted = await Story.findByIdAndDelete(storyId);
    if (!deleted) return res.status(404).json({ message: "Story not found" });
    res.status(200).json({ message: "Story deleted successfully" });
  } catch (error) {
    console.error("Error deleting story:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
