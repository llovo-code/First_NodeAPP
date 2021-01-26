const express = require('express');
const app = express();
const path = require('path')

//settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//middlewares

//routers
app.use(require('./routes/index.js'));
//static files

app.use(express.static(path.join(__dirname, 'public')));
//listening the port
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});