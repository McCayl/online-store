import express from 'express'
import db from './db.js'
import cors from 'cors'
import path from 'path'
import url from 'url';
import fileUpload from 'express-fileupload'
import router from './routes/index.js'
import errorHandler from './middleware/ErrorHandlingMiddleware.js'

const PORT = process.env.PORT || 10000
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
app.use(cors())
app.use(fileUpload({}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api/v1', router)

//Миддлвэйр, кот обр ошибки импортируется ластовым
//Потому что в нем не вызыввается некст, чтобы передать управление
//Следующему мидлвэеру
app.use(errorHandler)

const launch = async () => {
    try {
        await db.authenticate()
        await db.sync()
        app.listen(PORT, () => console.log(`server successfully started ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

launch()