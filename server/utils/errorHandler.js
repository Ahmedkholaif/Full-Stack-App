module.exports = function errorHandler(err, req, res, next) {
  if (err) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.send('error', { error: err })
  }
  next()
}