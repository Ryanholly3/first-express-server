const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyparser = require('body-parser')

app.use(cors());
app.user(bodyparser());

app.get('/', (req, res, next) =>{
  res.send('DERP')
})

app.listen(port, () => {
  console.log(`You are on ${port}`)
})
