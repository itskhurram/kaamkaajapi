const express = require('express');
const environment = require('./infrastructure/environment');
const sequelizeConfig = require('./persistance/sequelizeModels/configuration');
const app = express();
sequelizeConfig.sync();
app.listen(environment.PORT, () =>
  console.log(`listening on ${environment.URL}:${environment.PORT}`)
);
