// configurableMiddleware.js
const configurableMiddleware = (config) => {
    return (req, res, next) => {
      console.log('Configurable middleware with config:', config);
      next();
    };
  };
  
  module.exports = configurableMiddleware;

  