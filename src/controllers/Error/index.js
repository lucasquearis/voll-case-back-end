/* eslint-disable no-unused-vars */
const ErrorController = (error, _req, res, _next) => {
  res.status(500).json({ message: 'Erro interno' });
};

module.exports = { ErrorController };
