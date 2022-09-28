const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth } = require('../middleware/auth')
const aboutController = require('../controllers/aboutUs')
const searchController = require('../controllers/searchExercise')

router.get('/', ensureAuth, homeController.getHome)
router.post('/createWorkout', homeController.createWorkout)
router.get('/aboutUs', aboutController.aboutUs)
router.get('/searchExercise', searchController.searchExercise)

module.exports = router