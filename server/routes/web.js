const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/pagesController')
const projectsController = require('../controllers/projectsController')
const blogController = require('../controllers/blogController')
const bcrController = require('../controllers/bcrController')
const traversyController = require('../controllers/traversyController')

//BCR page
router.get('/bcr', bcrController.home)

// PAGES=====================================================
router.get('/', pagesController.homePage)

router.get('/about', pagesController.about)

router.get('/contact', pagesController.contact)

//Traversy Media node course

router.get('/traversy', traversyController.home)

router.get('/traversy/add', traversyController.add)

router.post('/traversy/add', traversyController.submit)

// PROJECTS=====================================================
router.get('/projects', projectsController.index)

router.get('/projects/create', projectsController.create)

router.post('/projects', projectsController.store)

router.get('/projects/:title', projectsController.show)

router.get('/projects/:title/edit', projectsController.edit)

router.put('/projects/:title', projectsController.update)

router.delete('/projects/:title', projectsController.destroy)

// BLOG===========================================================
router.get('/blog', blogController.index)

// ADMIN==========================================================
router.get('/admin', blogController.index)

module.exports = router
