import { IController } from '@presentation/protocols/IController'

import createProductFactory from '@main/factories/usecases/product/CreateProductFactory'
import { CreateProductController } from '@presentation/controllers/product/CreateProductController'

const makeCreateProductController = (): IController => {
  const createProduct = createProductFactory.makeCreateProductFactory()

  const createProductController = new CreateProductController(createProduct)

  return createProductController
}

export default { makeCreateProductController }
