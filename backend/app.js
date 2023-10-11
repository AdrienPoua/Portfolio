const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const projectsRoutes = require('./routes/projects');
const challengesRoutes = require('./routes/challenges');
const contactRoute = require('./routes/contact');
const cors = require('cors');

require('dotenv').config();

const { DB_USER, DB_PASSWORD } = process.env;

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xuxt7t2.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() =>
        console.log('Connexion à MongoDB réussie !')
    )
    .catch(() =>
        console.log('Connexion à MongoDB échouée !')
    );

const app = express();
app.use(express.json());

app.use(cors());

app.use('/api/portfolio/projects', projectsRoutes);
app.use('/api/portfolio/challenges', challengesRoutes);
app.use('/api/portfolio/contact', contactRoute);

module.exports = app;
