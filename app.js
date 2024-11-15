const express = require('express');
const connectDB = require('./config/database');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express();

connectDB();
app.use(express.json());


app.use(errorHandler);

app.listen(PORT, () => {   console.log(`> Server is running on http://localhost:${PORT}`);
})
