const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!. Wish you Merry Christmas and Happy New Year 2022!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
