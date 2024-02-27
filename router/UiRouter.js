const express = require('express');
const router = express.Router()
const Uicontroller = require('../controller/UiController')


router.get('/',Uicontroller.Home)
router.get('/movie',Uicontroller.Movie)
router.post('/addmovie',Uicontroller.addMovie)
router.get('/user',Uicontroller.User)
router.post('/adduser',Uicontroller.AddUser)
router.get('/review',Uicontroller.Review)
router.post('/addreview',Uicontroller.AddReview)

module.exports = router;