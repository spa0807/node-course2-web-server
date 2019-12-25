const express = require("express");
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname+"/views/partials");
hbs.registerHelper('global',(name) => {
    console.log(name);
    return name.toUpperCase();
});

const app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
    console.log('before making a request');
    next();
    console.log('after fore making a request');
});

app.use((req, res, next) => {
    console.log(`the requested method is ${req.method} and the requested url is ${req.url}`);
    //fs.appendFile('server.log',`the requested method is ${req.method} and the requested url is ${req.url} at ${new Date().toString()}\n`);
    console.log(new Date().toString());
    next();
    
});
//lkhhlkjhkjhhklh
app.use((req, res, next) => {
    res.render('maintenance.hbs');
  });
app.get('/', (req, res) => {

    res.render('home.hbs',{
        pageTitle :"This is the home page.",
        pageText : "This is home page text..",
        currentTime : new Date().getFullYear()

    });
});

app.get('/about', (req, res) => {

    res.render('about.hbs',{
        pageTitle :"This is the about page.",
        pageText : "This is home about text..",
        currentTime : new Date().getFullYear()

    });
});

app.get('/home', (req, res) => {

    res.render('home.hbs',{
        pageTitle :"This is the home page.",
        pageText : "This is home page text..",
        currentTime : new Date().getFullYear()

    });
});


app.listen(port);