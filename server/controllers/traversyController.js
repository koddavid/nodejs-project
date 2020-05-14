const express = require('express')
let Article = require('../models/article');

var traversyController = {};

//Home route
traversyController.home = (req, res) => {
  Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    } else {
      res.render('traversy/traversy-home',{
        title: 'Traversy Articles',
        articles: articles
      })
    }
  })
};

//Add article page GET rout
traversyController.add = (req, res) => {
  res.render('traversy/add_article',{
    title: 'Add article'
  })
};

traversyController.submit = (req, res) => {
  let article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  article.save((err) => {
    if(err){
      console.log(err);
    } else {
      res.redirect('/traversy');
    }
  })
};





module.exports = traversyController
