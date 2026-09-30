const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/rescues', require('./routes/rescueRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/subscribers', require('./routes/subscriberRoutes'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'BIHAR GUY Backend API is running active.' });
});

// Root API Welcome
app.get('/', (req, res) => {
  res.send('Welcome to BIHAR GUY Wildlife & Nature Preservation API Server');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
