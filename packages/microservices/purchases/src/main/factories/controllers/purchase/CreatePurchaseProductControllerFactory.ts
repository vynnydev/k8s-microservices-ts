import { CreatePurchaseProductController } from '@presentation/controllers/purchase/CreatePurchaseProductController'
import { IController } from '@presentation/protocols/IController'

import purchaseProductFactory from '@main/factories/usecases/purchase/CreatePurchaseProductFactory'

const makeCreatePurchaseProductController = (): IController => {
  const createPurchaseProduct =
    purchaseProductFactory.makeCreatePurchaseProduct()

  const purchaseProductController = new CreatePurchaseProductController(
    createPurchaseProduct,
  )

  return purchaseProductController
}

export default { makeCreatePurchaseProductController }
