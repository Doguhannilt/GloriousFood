import express from 'express'

// Controller
import { createUser, deleteUserById, loginUser, logoutUser, updateCurrentUserProfile } from '../controller/userController.js'


const router = express.Router()



router
    .route('/create')
    .post(createUser)

router
    .route('/login')
    .post(loginUser)

router
    .route('/logout')
    .get(logoutUser)

router
    .route('/put')
    .post(updateCurrentUserProfile)

router
    .route('/deleteById')
    .post(deleteUserById)


export default router