import Router from 'express'
const router = Router()
import { get, getOne, create } from '../controllers/DeviceController'
import roleCheck from '../middleware/CheckRoleMiddleware'

router.get('/', get)
router.get('/:id', getOne)
router.post('/', roleCheck('ADMIN'), create)

export default router