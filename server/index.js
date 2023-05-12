require('dotenv').config()
import express, { json, statics } from 'express'
import { authenticate, sync } from './db'
import models from './models/models'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { resolve } from 'path'
import router from './routes/index'
import errorHandler from './middleware/ErrorHandlingMiddleware'

const PORT = process.env.PORT || 10000

const app = express()
app.use(cors())
app.use(fileUpload({}))
app.use(json())
app.use(statics(resolve(__dirname, 'static')))
app.use('/api/v1', router)

//Миддлвэйр, кот обр ошибки импортируется ластовым
//Потому что в нем не вызыввается некст, чтобы передать управление
//Следующему мидлвэеру
app.use(errorHandler)

const launch = async () => {
    try {
        await authenticate()
        await sync()
        app.listen(PORT, () => console.log(`server successfully started ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

launch()