const express = require('express')
const app = express();
const port = 8000;

app.use(session({
  secret: 'key that will sign cookie',
  resave: false,
  saveUnitialized: false
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});