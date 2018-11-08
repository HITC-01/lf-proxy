// Proxy server
require('dotenv').config();
const express = require('express');
const path = require('path');
const handleRedirect = require('./redirect');

const app = express();

app.use((req, res, next) => {
  console.log(`INCOMING ${req.method} from ${req.originalUrl}`);
  next();
});

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/songs/:song', express.static(path.join(__dirname, '../public')));

// redirects
app.all('/user/*', handleRedirect.user);
app.all('/related/*', handleRedirect.related);
app.all('/comments/*', handleRedirect.comment);
app.all('/player/*', handleRedirect.player);

app.listen(process.env.PORT || 3000);
