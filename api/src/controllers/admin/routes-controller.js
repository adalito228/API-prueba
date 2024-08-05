exports.findAll = (req, res) => {
  const routes = {
    '/admin/usuarios': 'users.html'
  }

  res.status(200).send(routes)
}
