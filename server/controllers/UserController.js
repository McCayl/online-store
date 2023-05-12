import { sign } from 'jsonwebtoken'
import { hash, compareSync } from 'bcrypt'
import { badRequest } from '../error/ApiError'
import { User, Basket } from '../models/models'

const generateJWT = (id, email, role) => {
    return sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async signup(req, res, next) {
        const {email, password, role} = req.body
        
        if (!email || !password)
            return next(badRequest('Imvalid email or password'))
        const existed = await User.findOne({where: {email}})
        if (existed)
            return next(badRequest('Email already exist'))
        
        const encryptedPassword = await hash(password, 5)
        const user = await User.create({email, role, password: encryptedPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJWT(user.id, user.email, user.role)
        
        return res.json({token})
    }

    async signin(req, res, next) {
        const {email, password} = req.body
        
        const user = await User.findOne({where: {email}})
        if (!user)
            return next(badRequest('Email doesnt exist'))
        let comparePassword = compareSync(password, user.password)
        if (!comparePassword)
            return next(badRequest('Invalid password'))
        
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

export default new UserController()