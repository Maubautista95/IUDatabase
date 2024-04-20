require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const mongoString = process.env.DATABASE_URL;
const routeDirector = require('./routes/routeDirector');
const routeGenero = require('./routes/routeGenero');
const routeMedia = require('./routes/routeMedia');
const routeProductora = require('./routes/routeProductora');
const routeTipo = require('./routes/routeTipo');

mongoose.connect(mongoString);

const database = mongoose.connection;


database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

const app = express();

// Add the cors middleware early in your middleware chain
app.use(cors()); // Allow requests from any origin (for development)

app.use(express.json());

app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});


app.use('/directores', routeDirector);
app.use('/generos', routeGenero);
app.use('/MediaItems', routeMedia);
app.use('/Productoras', routeProductora);
app.use('/Tipos', routeTipo);


