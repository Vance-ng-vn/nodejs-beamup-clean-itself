const express = require('express');

const app = express();

app.get([ '/', '/manifest.json' ], (req, res) => {
    res.redirect(301, '/Closed');
});

app.get('*', (req, res) => {
    res.end(new Date() + "\nClosed");
});


process.env.NPM_CONFIG_LOGLEVEL = 'error';
process.env.NODE_ENV = 'production';

//console.log(process.env);
const server = app.listen(5000, ()=>{
    console.log("listening PORT: " + process.env.PORT);
});

//shutdown Server after 24 hours
setTimeout(() => {
    server.close(() => {
        console.log("Shuting down Server...");
    })
}, 24*60*60*1000);