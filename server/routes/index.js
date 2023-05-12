import Router from 'express'
const router = Router()
import brandRouter from './brandRouter'
import deviceRouter from './deviceRouter'
import typeRouter from './typeRouter'
import userdRouter from './userRouter'

router.use('/device', deviceRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/user', userdRouter)

export default router