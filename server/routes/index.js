import Router from 'express'
const router = Router()
import brandRouter from './brandRouter.js'
import deviceRouter from './deviceRouter.js'
import typeRouter from './typeRouter.js'
import userdRouter from './userRouter.js'

router.use('/device', deviceRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/user', userdRouter)

export default router