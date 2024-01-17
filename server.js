const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(__dirname + '/Index.html');
  console.log(`Somebody visited`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});