import { Brand } from '../models/models'

class BrandController {
    async get(req, res) {
        return res.json(await Brand.findAll())
    }

    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
}

export default new BrandController()