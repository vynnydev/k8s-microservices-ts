import { ICustomersRepository } from '@domain/application/repositories/ICustomersRepository'
import { PrismaOrmCustomersRepository } from '@infra/database/repositories/prisma/PrismaOrmCustomersRepository'

const makePrismaCustomersRepository = (): ICustomersRepository => {
  const prismaOrmCustomersRepository = new PrismaOrmCustomersRepository()

  return prismaOrmCustomersRepository
}

export default { makePrismaCustomersRepository }
