const express = require('express');

const app = express();

app.get('*', (req, res) => {
    res.send("Closed");
});

app.listen(process.env.PORT);