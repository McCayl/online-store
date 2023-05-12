import Router from 'express'
const router = Router()
import { get, create } from '../controllers/TypeController'
import roleCheck from '../middleware/CheckRoleMiddleware'

router.get('/', get)
router.post('/', roleCheck('ADMIN'), create)

export default router