import express from 'express'

import setupMiddlewares from './config/middlewares'
import setupRoutes from './config/routes'
import setupErrorService from './config/errorService'

const app = express()

setupMiddlewares(app)
setupRoutes(app)
setupErrorService(app)

export { app }
