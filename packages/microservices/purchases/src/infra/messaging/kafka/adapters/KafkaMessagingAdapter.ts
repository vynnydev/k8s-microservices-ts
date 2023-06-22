import logger from '@infra/external/logger/pino/logger'

import { IMessagingAdapter } from '@domain/application/adapters/IMessagingAdapter'
import { producer } from '../Producer'

export class KafkaMessagingAdapter implements IMessagingAdapter {
  async sendMessage(topic: string, message: any) {
    logger.info(`[Accounts] New message on topic '${topic}'`)
    logger.info(JSON.stringify(message, null, 2))

    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    })
  }
}
