const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const serverUser = `http://localhost:${process.env.USER_PORT}`;
const ServerRelated = `http://localhost:${process.env.RELATED_PORT}`;
const ServerComment = `http://localhost:${process.env.COMMENTS_PORT}`;
const ServerPlayer = `http://localhost:${process.env.PLAYER_PORT}`;

module.exports.user = (req, res) => {
  apiProxy.web(req, res, { target: serverUser });
};

module.exports.related = (req, res) => {
  apiProxy.web(req, res, { target: ServerRelated });
};

module.exports.comment = (req, res) => {
  apiProxy.web(req, res, { target: ServerComment });
};

module.exports.player = (req, res) => {
  apiProxy.web(req, res, { target: ServerPlayer });
};
