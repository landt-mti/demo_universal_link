const express = require('express')
const app = express()
var fs = require('fs');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

//Config files
app.get('/apple-app-site-association', (req, res) => {
    // var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
    // res.send(aasa);
    res.download(__dirname + '/apple-app-site-association');
});

app.get('/.well-known/apple-app-site-association', (req, res) => {
    // var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
    // res.send(aasa);
    res.download(__dirname + '/apple-app-site-association');
});

app.get('/assetlinks.json', (req, res) => {
    // var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
    // res.send(aasa);
    res.download(__dirname + '/assetlinks.json');
});

app.get('/.well-known/assetlinks.json', (req, res) => {
    // var aasa = fs.readFileSync(__dirname + '/apple-app-site-association');
    // res.send(aasa);
    res.download(__dirname + '/assetlinks.json');
});

app.get('/notificationList', (req, res) => {
    res.send('Hello World!')
});

app.listen(process.env.PORT || 3000);