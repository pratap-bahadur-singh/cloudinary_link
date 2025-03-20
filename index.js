const express = require('express');
const dotenv = require('dotenv');
const uploadRoute = require('./controller/routeUpload');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/api/users', uploadRoute);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
