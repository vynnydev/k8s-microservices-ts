import { Router } from 'express'

import { adaptRoute } from '@main/core/adapters/ExpressRouteAdapter'

import createProductControllerFactory from '@main/factories/controllers/product/CreateProductControllerFactory'

const router = Router()

router
  .route('/products')
  .post(
    adaptRoute(createProductControllerFactory.makeCreateProductController()),
  )

export default { router }
