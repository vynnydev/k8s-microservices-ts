import { prisma } from '@infra/external/prisma/client'

import { IProductsRepository } from '@domain/application/repositories/IProductsRepository'
import { Product } from '@domain/models/product/Product'
import { ProductMapper } from '@presentation/mappers/ProductMapper'

export class PrismaOrmProductsRepository implements IProductsRepository {
  async create(product: Product): Promise<void> {
    const data = ProductMapper.toPersistence(product)

    await prisma.product.create({ data })
  }

  async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { id },
    })

    if (!product) {
      return null
    }

    return ProductMapper.toDomain(product)
  }
}
