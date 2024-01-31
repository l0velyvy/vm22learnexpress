const express = require('express');
const nunjucks = require(`nunjucks`)
const app = express();
const port = 3000;
app.use(express.urlencoded({
  extended:true
}))
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

        app.get('/', (req, res) => {
          res.render('index.njk');
          console.log(`Somebody visited`);
        });

        app.get('/page2', (req, res) => {
            res.render('page2.njk');
            console.log(`Somebody visited`);
          });

            app.get(`/circle`,(req, res) => {
              res.render(`circle.njk`);
            });

            app.post(`/circle`,(req, res) => {
              let area = Math.PI * req.body.radius * req.body.radius;
              let circumference = Math.PI * req.body.radius * 4/3;
              let volume = Math.PI * req.body.radius * req.body.radius * req.body.radius * 4/3;
              res.render ('circleanswer.njk', ({r:req.body.radius, a: area, c: circumference, v:volume}))
            });    

app.use(express.urlencoded({
  extended:true
}));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

