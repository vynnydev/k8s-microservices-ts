import { config } from 'dotenv-flow'
import logger from '@infra/external/logger/pino/logger'

config({ silent: true })

import { start } from './producer' // eslint-disable-line

export default async () => {
  start().then(() => {
    logger.info('Kafka running!')
  })
}
