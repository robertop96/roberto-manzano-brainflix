const express = require('express');
const videos = require('./routes/videos');
const app = express();
const PORT = 5050;

app.use(express.json());

app.use('/api/req', videos);

app.listen(5050, () => {
  console.log(`Listening in port ${PORT}`);
});
