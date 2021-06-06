const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('hello world');
})

app.listen(8081, () => {
    console.log(`app is running at 8081`);
})