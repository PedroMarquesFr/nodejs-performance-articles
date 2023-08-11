const express = require('express');
const fs = require('fs');
const app = express();

app.get('/download', function(req, res) {
  const fileStream = fs.createReadStream('large-file.mp4');
  fileStream.pipe(res);
});

app.listen(3000);

