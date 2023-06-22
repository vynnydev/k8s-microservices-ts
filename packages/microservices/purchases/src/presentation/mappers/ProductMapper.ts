import { Product as PersistenceContact } from '@prisma/client'

import { Product } from '@domain/models/product/Product'
import { Description } from '@domain/models/product/description'

export class ProductMapper {
  static toDomain(raw: PersistenceContact): Product {
    const descriptionOrError = Description.create(raw.description)

    if (descriptionOrError.isLeft()) {
      throw new Error('Description value is invalid.')
    }

    const customerOrError = Product.create(
      {
        description: descriptionOrError.value,
      },
      raw.id,
    )

    if (customerOrError.isRight()) {
      return customerOrError.value
    }

    throw new Error()
  }

  static toPersistence(Product: Product) {
    return {
      id: Product.id,
      description: Product.description.value,
      created_at: Product.createdAt,
    }
  }
}
