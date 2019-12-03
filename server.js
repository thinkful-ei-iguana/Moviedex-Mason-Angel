require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const movies = require('./movieData');
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

// app.use(function validateBearerToken(req, res, next){
//   const apiToken = process.env.API_TOKEN
//   // const authToken = 


// });


console.log(process.env.API_TOKEN);

app.get('/movie', function handleGetMovie(req,res){
  res.json(movies);
});
app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});