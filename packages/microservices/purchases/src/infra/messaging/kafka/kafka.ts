import { config } from 'dotenv-flow'
import { Kafka } from 'kafkajs'

config({ silent: true })

if (!process.env.KAFKA_BROKER) {
  throw new Error('Kafka broker address not set!')
}

export const client = new Kafka({
  clientId: 'purchases',
  brokers: ['nice-spaniel-5518-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'bmljZS1zcGFuaWVsLTU1MTgkPxMvPRle7gYoYFK2uXdZmI4ST3TueZpyNiz8ZF0',
    password: 'ee4c2c83baac4161ab3c4895ff71bc01',
  },
  ssl: true,
})
