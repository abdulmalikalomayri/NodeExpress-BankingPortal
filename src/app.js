/**
 * This is very old project followed by plurhsight course 
 * but it still run find by running on cmd (npm start)
 * there's no model and database in this project all the dumpy data is from json folder
 */
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = new express();

const { accounts, users, writeJSON } = require('./data.js');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));
 
app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);
app.get('/profile', (req, res) =>  res.render('profile', { user: users[0] }));

app.listen(3000, () => { console.log('PS Project Running on port 3000!') }); 