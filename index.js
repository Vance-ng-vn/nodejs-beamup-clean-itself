const express = require('express');

const app = express();

app.get('*', (req, res) => {
    res.end(new Date() + "\nClosed");
});


//delete
delete process.env.PORT;
delete process.env.CACHE;
delete process.env.NPM_CONFIG_LOGLEVEL;

console.log(process.env);
app.listen(process.env.PORT || 61120);
