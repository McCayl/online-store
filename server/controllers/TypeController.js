import { Type } from '../models/models'

class TypeController {
    async get(req, res) {
        return res.json(await Type.findAll())
    }

    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
}

export default new TypeController()