import { IFindPurchaseProduct } from '@domain/application/usecases/purchase/IFindPurchaseProduct'
import { FindPurchaseProduct } from '@usecases/purchase/FindPurchaseProduct'

import prismaPurchasesRepositoryFactory from '@main/factories/repositories/PrismaPurchasesRepositoryFactory'

const makeFindPurchaseProduct = (): IFindPurchaseProduct => {
  const prismaPurchasesRepository =
    prismaPurchasesRepositoryFactory.makePrismaPurchasesRepository()

  const createPurchaseProduct = new FindPurchaseProduct(
    prismaPurchasesRepository,
  )

  return createPurchaseProduct
}

export default { makeFindPurchaseProduct }
