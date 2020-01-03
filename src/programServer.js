const express = require('express');
const intCode = require('./intCode.v3');
const app = express();
const ADDRESS = process.env.ADDRESS;
const PORT = 3000 + ADDRESS;

let input = [ADDRESS];
const state = {
    output: [],
    index: 0,
    rIndex: 0
}

app.use(express.json());

app.post('/', (req, res) => {
    input = req.body;
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
