const express = require('express');
const routes = require('./routes');
const PORT = 5050;
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public/images'));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});
