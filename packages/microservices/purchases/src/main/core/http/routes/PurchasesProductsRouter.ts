import { Router } from 'express'

import { adaptRoute } from '@main/core/adapters/ExpressRouteAdapter'

import purchaseProductControllerFactory from '@main/factories/controllers/purchase/CreatePurchaseProductControllerFactory'

const router = Router()

router
  .route('/purchases')
  .post(
    adaptRoute(
      purchaseProductControllerFactory.makeCreatePurchaseProductController(),
    ),
  )

export default { router }
