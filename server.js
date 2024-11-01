const express = require('express');
const app = express();
const path = require('path');

let counter = 0;

app.use(express.static('public'));

app.get('/counter', (req, res) => {
    counter++;
    res.json({ counter });
});

app.get('/reset', (req, res) => {
    counter = 0;
    res.json({ counter });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
