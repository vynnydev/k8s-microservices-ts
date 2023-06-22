import { config } from 'dotenv-flow'

config({ silent: true })

import { start } from './producer' // eslint-disable-line

start().then(() => {
  console.log(`Kafka running!`)
})
