const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to database
mongoose.connect(config.database, {useNewUrlParser: true})
    .then((db) => console.log('DB is connected'))
    .catch((err) => console.error(err));

const app = express();

// Port Number
const port = process.env.PORT || 3000;

app.use(express.json({extended: true, limit: '50mb'}));

// CORS Middleware
app.use(cors());

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/api/brand', require('./routes/brand.routes'));
app.use('/api/product', require('./routes/product.routes'));
app.use('/api/category', require('./routes/category.routes'));
app.use('/api/provider', require('./routes/provider.routes'));
app.use('/api/price', require('./routes/price.routes'));
app.use('/api/sale', require('./routes/sale.routes'));

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint.');
});

app.use(function(req, res) {
  res.status(404).end('404 Not Found');
});

// Start server
app.listen(port, () => {
  console.log('listening on port ' + port);
});
