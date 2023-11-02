const express = require('express');

const app = express();

app.get('*', (req, res) => {
    res.end(new Date() + "\nClosed");
});


//delete
// delete process.env.PORT;
// delete process.env.CACHE;
// delete process.env.NPM_CONFIG_LOGLEVEL;

//console.log(process.env);
const server = app.listen(process.env.PORT || 5000, ()=>{
    console.log("listening PORT: " + process.env.PORT);
});

//shutdown Server after 5s
setTimeout(() => {
    server.close(() => {
        console.log("Shuting down Server...");
    })
}, 25000);