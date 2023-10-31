const express = require('express');

const app = express();

app.get('*', (req, res) => {
    res.end(new Date() + "\nClosed");
});

app.listen(process.env.PORT || 61120);
