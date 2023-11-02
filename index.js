const express = require('express');

const app = express();

app.get('*', (req, res) => {
    res.end(new Date() + "\nClosed");
});


console.log(process.env);
app.listen(process.env.PORT || 61120);
