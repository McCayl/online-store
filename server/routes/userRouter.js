import Router from 'express'
const router = Router()
import UserController from '../controllers/UserController.js'
import authMiddleware from '../middleware/AuthMiddleware.js'

router.post('/signup', UserController.signup)
router.post('/signin', UserController.signin)
router.get('/auth', authMiddleware, UserController.check)

export default router