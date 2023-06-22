import { IFindProduct } from '@domain/application/usecases/product/IFindProduct'

import prismaProductsRepositoryFactory from '@main/factories/repositories/PrismaProductsRepositoryFactory'
import { FindProduct } from '@usecases/product/FindProduct'

const makeFindProductFactory = (): IFindProduct => {
  const prismaProductsRepository =
    prismaProductsRepositoryFactory.makePrismaProductsRepository()

  const findProduct = new FindProduct(prismaProductsRepository)

  return findProduct
}

export default { makeFindProductFactory }
