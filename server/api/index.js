const router = require('express').Router();

// router.use('/route1', require('./route1')); // matches all requests to /api/users/



// All other routes 404
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});


module.exports = router;