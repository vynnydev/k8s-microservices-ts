import { prisma } from '@infra/external/prisma/client'

import { Purchase } from '@domain/models/purchase/Purchase'
import { IPurchasesRepository } from '@domain/application/repositories/IPurchasesRepository'
import { PurchasesMapper } from '@presentation/mappers/PurchasesMapper'

export class PrismaOrmPurchasesRepository implements IPurchasesRepository {
  async create(purchase: Purchase): Promise<void> {
    const data = PurchasesMapper.toPersistence(purchase)

    await prisma.purchase.create({ data })
  }

  async findById(id: string): Promise<Purchase | null> {
    const purchase = await prisma.purchase.findUnique({
      where: { id },
    })

    if (!purchase) {
      return null
    }

    return PurchasesMapper.toDomain(purchase)
  }
}
