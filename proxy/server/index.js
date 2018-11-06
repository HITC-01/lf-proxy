// Proxy server
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  console.log(`INCOMING ${req.method} from ${req.originalUrl} and ${process.env.PORT}`);
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

const handleRedirect = (req, res) => {
  const baseUrl = 'http://localhost:';
  const splitPath = req.path.split('/');
  splitPath.shift();
  const pathStart = splitPath.shift();
  let targetUrl = `${baseUrl}${process.env.PORT4}/sc`;
  if (pathStart.includes('user')) {
    targetUrl = `${baseUrl}${process.env.PORT1}`;
  } else if (pathStart.includes('related')) {
    targetUrl = `${baseUrl}${process.env.PORT2}`;
  // }  else if (pathStart.includes('related')) {
  //   targetUrl = `${baseUrl}${process.env.PORT3}`;
  }
  console.log(`Incoming to 3000: ${req.originalUrl}`, pathStart, `${targetUrl}${splitPath.join('/')}`);
  res.redirect(`${targetUrl}/${splitPath.join('/')}`);
};

app.use((req, res, next) => {
  console.log(`INCOMING ${req.method} from ${req.originalUrl}`);
  next();
});

app.use(handleRedirect);

app.listen(process.env.PORT || 3000);
