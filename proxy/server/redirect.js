const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
//const serverUser = `${process.env.USER_SERVER}`;
const serverUser = `http://localhost:${process.env.USER_PORT}`;
const ServerRelated = `${process.env.RELATED_SERVER}`;
const ServerComment = `${process.env.COMMENTS_SERVER}`;
const ServerPlayer = `${process.env.PLAYER_SERVER}`;

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
