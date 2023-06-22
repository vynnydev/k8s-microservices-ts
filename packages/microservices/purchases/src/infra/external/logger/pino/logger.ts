import pino from 'pino'
import { logger } from '@main/core/http/config/environment'

export default pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  enabled: logger.enabled,
  level: logger.level,
})
