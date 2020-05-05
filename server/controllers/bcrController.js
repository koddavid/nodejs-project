const express = require('express')


var bcrController = {};

bcrController.home = (req, res) => {
  res.render('bcr/home')
}




module.exports = bcrController
