var express = require('express');
var app = express();
const path = require('path');

var PORT = process.env.port || 3001;
const SLDS_DIR = '/node_modules/@salesforce-ux/design-system/assets';
 
app.use('/slds', express.static(__dirname + SLDS_DIR));
app.get('/', function (req, res) {
    //res.send('Hello World!');
    res.sendFile(path.resolve('index.html'));
  });
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});