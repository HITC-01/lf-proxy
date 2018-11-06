module.exports = (req, res) => {
  const baseUrl = 'http://localhost:';
  const splitPath = req.path.split('/');
  splitPath.shift();

  const pathStart = splitPath.shift();
  let targetUrl = `${baseUrl}${process.env.PORT4}/sc`;
  if (pathStart.includes('user')) {
    targetUrl = `${baseUrl}${process.env.PORT1}`;
  } else if (pathStart.includes('related')) {
    targetUrl = `${baseUrl}${process.env.PORT2}`;
  } else if (pathStart.includes('comments')) {
    targetUrl = `${baseUrl}${process.env.PORT3}`;
  }
  res.redirect(`${targetUrl}/${splitPath.join('/')}`);
};
