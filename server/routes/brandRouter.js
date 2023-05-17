import Router from 'express'
const router = Router()
import BrandController from '../controllers/BrandController.js'
import roleCheck from '../middleware/CheckRoleMiddleware.js'

router.get('/',  BrandController.get)
router.post('/', roleCheck('ADMIN'), BrandController.create)

export default router