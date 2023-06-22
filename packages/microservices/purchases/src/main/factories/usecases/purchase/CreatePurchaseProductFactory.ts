import { ICreatePurchaseProduct } from '@domain/application/usecases/purchase/ICreatePurchaseProduct'
import { CreatePurchaseProduct } from '@usecases/purchase/CreatePurchaseProduct'

import prismaCustomersRepositoryFactory from '@main/factories/repositories/PrismaCustomersRepositoryFactory'
import prismaPurchasesRepositoryFactory from '@main/factories/repositories/PrismaPurchasesRepositoryFactory'
import findProductFactory from '../product/FindProductFactory'

const makeCreatePurchaseProduct = (): ICreatePurchaseProduct => {
  const prismaCustomerRepository =
    prismaCustomersRepositoryFactory.makePrismaCustomersRepository()
  const prismaPurchasesRepository =
    prismaPurchasesRepositoryFactory.makePrismaPurchasesRepository()

  const findProduct = findProductFactory.makeFindProductFactory()

  const createPurchaseProduct = new CreatePurchaseProduct(
    prismaCustomerRepository,
    prismaPurchasesRepository,
    findProduct,
  )

  return createPurchaseProduct
}

export default { makeCreatePurchaseProduct }
