function notFound(req, res, next) {
  res.status(404).send('Sorry, that route does not exist!')
}

module.exports = notFound