import * as dotenv from 'dotenv'

// diretorio do arquivo env
const path = `${__dirname}../../../../../.env`

dotenv.config({ path })

export const logger = {
  enabled: true,
  level: 'info',
}

// App
export const { NODE_ENV, PORT } = process.env

// Kafka
export const {
  KAFKA_CLIENT_ID,
  KAFKA_BROKER,
  KAFKA_CONSUMER_GROUP_ID,
  KAFKA_MECHANISM,
  KAFKA_SASL_USERNAME,
  KAFKA_SASL_PASSWORD,
} = process.env
