import 'dotenv/config'
import 'reflect-metadata'
import logger from '@infra/external/logger/pino/logger'

import { app } from './app'

app.listen(process.env.PORT, () => {
  logger.info(
    `🚀 ExpressServer running on http://localhost:${process.env.PORT}`,
  )
})
