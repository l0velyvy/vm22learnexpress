const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Index.html');
  console.log(`Somebody visited`);
});

app.get('/page2', (req, res) => {
    res.sendFile(__dirname + '/page2.html');
    console.log(`Somebody visited`);
  });

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});