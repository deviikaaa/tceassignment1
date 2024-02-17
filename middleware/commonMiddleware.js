// commonMiddleware.js
const commonMiddleware = (req, res, next) => {
    console.log('This is common middleware');
    next();
  };
  
  module.exports = commonMiddleware;
  