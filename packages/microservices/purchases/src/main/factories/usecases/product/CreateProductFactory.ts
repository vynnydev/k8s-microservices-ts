import { ICreateProduct } from '@domain/application/usecases/product/ICreateProduct'

import prismaProductsRepositoryFactory from '@main/factories/repositories/PrismaProductsRepositoryFactory'
import { CreateProduct } from '@usecases/product/CreateProduct'

const makeCreateProductFactory = (): ICreateProduct => {
  const prismaProductsRepository =
    prismaProductsRepositoryFactory.makePrismaProductsRepository()

  const createProduct = new CreateProduct(prismaProductsRepository)

  return createProduct
}

export default { makeCreateProductFactory }
