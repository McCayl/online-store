import Router from 'express'
const router = Router()
import DeviceController from '../controllers/DeviceController.js'
import roleCheck from '../middleware/CheckRoleMiddleware.js'

router.get('/', DeviceController.get)
router.get('/:id', DeviceController.getOne)
router.post('/', roleCheck('ADMIN'), DeviceController.create)

export default router