import Router from 'express'
const router = Router()
import { signup, signin, check } from '../controllers/UserController'
import authMiddleware from '../middleware/AuthMiddleware'

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/auth', authMiddleware, check)

export default router