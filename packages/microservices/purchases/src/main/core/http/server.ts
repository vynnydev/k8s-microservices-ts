import 'dotenv/config'
import 'reflect-metadata'
import logger from '@infra/external/logger/pino/logger'

import { setupAppServer } from './app'

const serverHandler = async () => {
  const app = await setupAppServer()

  app.listen(process.env.PORT, () => {
    logger.info(`ExpressServer running on http://localhost:${process.env.PORT}`)
  })
}

serverHandler()
