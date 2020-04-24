const express = require('express')
const projects = require('../models/projectsDB')
const projectsController = {}

projectsController.index = (req, res) => {
  //   const projects = [{
  //     title: 'Dashboard',
  //     tags: ['html','css','javascript','php'],
  //     time: '12/3/2017',
  //     img: 'https://cdn.dribbble.com/users/427857/screenshots/10992168/media/4eb2102df0b27768d37e7fdfac21a240.jpg'
  //   },
  //   {
  //     title: 'BCR',
  //     tags: ['html','css','javascript','node.js'],
  //     time: '12/3/2017',
  //     img: 'https://cdn.dribbble.com/users/686119/screenshots/10987855/media/cf391fff03a675705d28ba72cde3ba25.png'
  //   },
  //   {
  //     title: 'Formula 1',
  //     tags: ['html','css','javascript','pug'],
  //     time: '12/3/2017',
  //     img: 'https://cdn.dribbble.com/users/476559/screenshots/10995737/media/47dc1297af084bb3890995a19597a333.png'
  //   },
  //   {
  //     title: 'English PL',
  //     tags: ['html','css'],
  //     time: '12/3/2017',
  //     img: 'https://cdn.dribbble.com/users/1875714/screenshots/7699472/media/36d5b73c41d8a432722c803d6296fc7a.png'
  //   },
  //   {
  //     title: 'LIDL',
  //     tags: ['html','css','javascript'],
  //     time: '12/3/2017',
  //     img: 'https://cdn.dribbble.com/users/702789/screenshots/10978529/media/4a526f9b57fb09af5f70a9c6479ca794.png'
  //   },
  //   {
  //     title: 'Mobile First',
  //     tags: ['html','css','javascript','iOS'],
  //     time: '12/3/2017',
  //     img: 'https://cdn.dribbble.com/users/1544818/screenshots/10953094/media/569dedf18ebda0d47847962be809e6d4.png'
  //   },
  // ]
  var testingVar = process.env.DB_USERNAME

  res.render('projects/index', {
    projects: projects,
    testingVar: testingVar
  })
}

projectsController.create = (req, res) => {
  res.render('projects/create')
}

projectsController.store = (req, res) => {
  res.send({
    saved: true
  })
}

projectsController.show = (req, res) => {
  var currentTitle = req.params.title;
  var pagecontent="default";

  function searchObject(a){
    var i;
    for (i = 0;i<projects.length; i++) {
      if (a == projects[i].slug) {
         pagecontent=projects[i]
         console.log(pagecontent)
         return pagecontent

      }
    }
  }
  pagecontent = searchObject(currentTitle);


  res.render('projects/show', {
    projects: projects,
    currentTitle: currentTitle,
    pagecontent: pagecontent

  })
}

projectsController.edit = (req, res) => {
  res.render('projects/edit')
}

projectsController.update = (req, res) => {
  res.send({
    update: true
  })
}

projectsController.destroy = (req, res) => {
  res.send({
    deleted: true
  })
}


module.exports = projectsController
