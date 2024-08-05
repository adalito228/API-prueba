exports.findAll = (req, res) => {
  const routes = {
    '/': 'home.html'
  }

  res.status(200).send(routes)
}
