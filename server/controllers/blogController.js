const express = require('express')

const blogController = {}

blogController.index = (req, res) => {
  res.render('blog/index')
}

module.exports = blogController
