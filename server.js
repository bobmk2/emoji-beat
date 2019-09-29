const express = require('express');
const helmet = require('helmet');
const app = express();

const port = process.env.PORT || 5000;

app.use(helmet());

app.use('/js', express.static('dest/js'));
app.use('/se', express.static('static/se'));
app.use('/vendor', express.static('static/vendor'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: `${__dirname}/static` });
});

app.listen(port, function(err) {
  console.log('Express server started on port %s', port);
});
