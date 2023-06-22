import { IPurchasesRepository } from '@domain/application/repositories/IPurchasesRepository'
import { PrismaOrmPurchasesRepository } from '@infra/database/repositories/prisma/PrismaOrmPurchasesRepository'

const makePrismaPurchasesRepository = (): IPurchasesRepository => {
  const prismaOrmPurchasesRepository = new PrismaOrmPurchasesRepository()

  return prismaOrmPurchasesRepository
}

export default { makePrismaPurchasesRepository }
