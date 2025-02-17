const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const contestantRoutes = require('./routes/contestantRoutes');
const votingRoutes = require('./routes/votingRoutes');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/contestants', contestantRoutes);
app.use('/api/vote', votingRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
