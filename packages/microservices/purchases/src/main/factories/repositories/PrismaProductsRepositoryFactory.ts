import { IProductsRepository } from '@domain/application/repositories/IProductsRepository'
import { PrismaOrmProductsRepository } from '@infra/database/repositories/prisma/PrismaOrmProductsRepository'

const makePrismaProductsRepository = (): IProductsRepository => {
  const prismaOrmProductsRepository = new PrismaOrmProductsRepository()

  return prismaOrmProductsRepository
}

export default { makePrismaProductsRepository }
