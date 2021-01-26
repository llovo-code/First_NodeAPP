const express = require('express');
const routers = express.Router();


routers.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views/index.html'))
    res.render('index', { title: 'First Website', date: new Date().getFullYear() });
    // console.log(path.join(__dirname, 'views/index.html'));
});


routers.get('/about', (req, res) => {

});


routers.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page', date: new Date().getFullYear() });
});

module.exports = routers;