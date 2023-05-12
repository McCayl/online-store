import { verify } from 'jsonwebtoken'

export default function(role) {
    return function(req, res, next) {
        if (req.method == 'OPTIONS')
            next()
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token)
                return res.status(401).json({message: 'Not authorized'})
            const decoded = verify(token, process.env.SECRET_KEY)
            if (role != decoded.role)
                return res.status(403).json({message: 'Access denied'})
            req.user = decoded
            next()
        } catch(e) {
            res.status(401).json({message: 'Not authorized'})
        }
    }
}