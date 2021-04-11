const express = require('express');
const environment = require('./infrastructure/environment');
const domainConfiguration = require('./domain');
const app = express();
domainConfiguration.sync();
app.listen(environment.PORT, () =>
  console.log(`listening on ${environment.URL}:${environment.PORT}`)
);
