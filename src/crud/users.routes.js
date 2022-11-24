//Dependencies
const router = require('express').Router()

//file import
const Services = require('./users.services')

router.get('/users', Services.getAllUsers)
router.post('/users', Services.postNewUsers)

router.get('/users/random', Services.getRandomUsers )
router.get('/users/:id', Services.getAllUsersById)
router.delete('/users/:id', Services.DeleteAllUsersById)


module.exports = router
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
