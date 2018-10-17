const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res, next) =>{
  res.send('DERP')
})

app.listen(port, () => {
  console.log(`You are on ${port}`)
})
