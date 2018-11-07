const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const serverUser = `http://localhost:${process.env.USER_PORT}`;
const ServerRelated = `http://localhost:${process.env.RELATED_PORT}`;
const ServerComment = `http://localhost:${process.env.COMMENTS_PORT}`;
const ServerPlayer = `http://localhost:${process.env.PLAYER_PORT}`;

module.exports.user = (req, res) => {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, { target: serverUser });
};

module.exports.related = (req, res) => {
  console.log('redirecting to Server2');
  apiProxy.web(req, res, { target: ServerRelated });
};

module.exports.comment =  (req, res) => {
  console.log('redirecting to Server3');
  apiProxy.web(req, res, { target: ServerComment });
};

module.exports.player = (req, res) => {
  console.log('redirecting to Server4');
  apiProxy.web(req, res, { target: ServerPlayer });
};
