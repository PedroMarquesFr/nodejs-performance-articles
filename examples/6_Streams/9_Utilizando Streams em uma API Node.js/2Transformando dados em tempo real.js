const express = require('express');
const { Transform } = require('stream');
const app = express();

app.get('/data', function(req, res) {
  const jsonStream = generateLargeJsonDataStream();

  if (req.query.format === 'csv') {
    const jsonToCsvTransform = new Transform({
      // Implementation here...
    });

    jsonStream.pipe(jsonToCsvTransform).pipe(res);
  } else {
    jsonStream.pipe(res);
  }
});

app.listen(3000);

