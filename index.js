const express = require('express');
const path = require('path');
const app = express();
const { engine } = require('express-handlebars');
const port = process.env.PORT || 1000;

// Handlebars middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=> res.render('index'));

// Members api routes
app.use('/api/members',require('./routes/api/members'));

app.listen(port, () =>
    console.log("Server is running !")
);


// app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'css')));