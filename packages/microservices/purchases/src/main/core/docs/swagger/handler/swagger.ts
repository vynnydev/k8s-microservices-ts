import swaggerConfig from '@main/core/docs/swagger'
import { noCacheMiddleware } from '@main/core/http/middlewares/NoCacheMiddleware'
import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/api-docs', noCacheMiddleware, serve, setup(swaggerConfig))
}
