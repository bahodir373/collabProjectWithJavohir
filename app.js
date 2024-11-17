const express = require('express');
const cors = require("cors")
const connectDB = require('./config/database');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorMiddleware');
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express();
app.use(cors())
connectDB();

app.use(express.json());


app.use(errorHandler);

app.listen(PORT, () => {   console.log(`> Server is running on http://localhost:${PORT}`);
})
