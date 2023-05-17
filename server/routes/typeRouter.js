import Router from 'express'
const router = Router()
import TypeController from '../controllers/TypeController.js'
import roleCheck from '../middleware/CheckRoleMiddleware.js'

router.get('/', TypeController.get)
router.post('/', roleCheck('ADMIN'), TypeController.create)

export default router