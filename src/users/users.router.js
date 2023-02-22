const router = require('express').Router()
const passportJwt = require('../middleware/auth.middleware')
const userServices = require('./users.services')

router.get('/', userServices.getAllUsers)
router.post('/', userServices.postNewUser)

router.get('/:id', userServices.getUserById)
router.patch('/:id', userServices.patchUser)
router.delete('/:id', userServices.deleteUser)

router.get('/me', passportJwt, userServices.getMyUser)
router.patch('/me', passportJwt,userServices.patchMyUser)
router.delete('/me', passportJwt, userServices.deleteMyUser)

module.exports = router