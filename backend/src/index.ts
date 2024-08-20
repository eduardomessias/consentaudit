import express, { Express } from 'express'
import dotenv from 'dotenv'
import router from './aot/router/ui.router'
import apiRouter_v0 from './aot/router/api.router'
import specs from './aot/docs/swagger'
import swaggerUi from 'swagger-ui-express'


dotenv.config()


const app: Express = express()
const port = process.env.PORT


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))


app.use(router)
app.use('/api/v0', apiRouter_v0)


app.listen(port, () => {
    console.log(`[CONSENT-AUDIT][BACK-END] Consent Audit is running on port ${port}`)
})