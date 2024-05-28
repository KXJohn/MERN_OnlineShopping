const express = require('express');

const feedRouters = require('./routers/feed');

const app = express();

app.use('/feed', feedRouters);

app.listen(8080);