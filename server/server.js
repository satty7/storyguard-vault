const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const storyRoutes = require('./routes/storyRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
