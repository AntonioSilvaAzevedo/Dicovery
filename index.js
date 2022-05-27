const express = require('express');
const res = require('express/lib/response');

const app = express();

app.listen('3300');

//middleware
app.use(express.json())

///let author = "Antonio Carlos"

//app.route('/').get((req, res) => res.send(author))

/* app.route('/').post((req, res) => {
  const {nome, cidade, filmes} = req.body;
  res.send(filmes);
}) */

/* app.route('/').put((req,res) => {
  author = req.body.author
  res.send(author)
})

app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
}) */

 
 app.route('/').get((req,res)=> res.send(req.query.nome))
 app.route('/about/user').get((req,res)=> res.send(req.query))