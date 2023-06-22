import { client } from './kafka'
import logger from '@infra/external/logger/pino/logger'

export const producer = client.producer({
  allowAutoTopicCreation: true,
})

export async function start() {
  await producer.connect().then(() => {
    logger.info('[MicroPurchases] Kafka producer connected')
  })
}
