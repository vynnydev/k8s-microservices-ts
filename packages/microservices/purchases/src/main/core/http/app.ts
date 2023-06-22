import { config } from 'dotenv-flow'
import express, { Express } from 'express'

import setupSwagger from '@main/core/docs/swagger/handler/swagger'
import setupMiddlewares from './config/middlewares'
import setupRoutes from './config/routes'
import setupErrorHandler from './config/errorHandler'
import setupKafkaHandler from '@infra/messaging/kafka/app'

export const setupAppServer = async (): Promise<Express> => {
  config({ silent: true })

  const app = express()

  setupSwagger(app)
  setupMiddlewares(app)
  setupRoutes(app)
  setupErrorHandler(app)
  setupKafkaHandler()

  return app
}
