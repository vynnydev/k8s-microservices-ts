import paths from './paths'
import helpers from './helpers'
import schemas from './schemas'
import components from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'K8S Microservices E-commerce - Clean Node Microservices',
    description: 'Purchases Microservices for E-commerce and FinTech',
    version: '1.0.0',
    contact: {
      name: 'Vinicius Prudencio',
      email: 'vynnyprudencio@gmail.com',
      url: 'https://www.linkedin.com/in/vinicius-prudencio/',
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
    },
  },
  externalDocs: {
    description: 'Link do GitHub',
    url: 'https://github.com/vynnydev/k8s-microservices-ts',
  },
  servers: [
    {
      url: '/api/v1/purchases',
      description: 'Servidor Principal',
    },
  ],
  tags: [
    {
      name: 'Purchases',
      description: 'Purchasing-related APIs',
    },
  ],
  paths,
  schemas,
  helpers,
  components,
}
