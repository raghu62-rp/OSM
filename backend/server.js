require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');


const app = express();


// connect DB
connectDB(process.env.MONGO_URI);


// middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Add response compression
const compression = require('compression');
app.use(compression());
app.use(express.json());


// routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


app.get('/', (req, res) => res.send('ONLINE SHOPPING MALL API is running'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));