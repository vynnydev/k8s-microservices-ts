import { Purchase as PersistencePurchase } from '@prisma/client'

import { Purchase } from '@domain/models/purchase/Purchase'

export class PurchasesMapper {
  static toDomain(raw: PersistencePurchase): Purchase {
    const purchaseOrError = Purchase.create(
      {
        customerId: raw.customer_id,
        productId: raw.product_id,
        createdAt: raw.created_at,
      },
      raw.id,
    )

    if (!purchaseOrError) {
      return purchaseOrError
    }

    throw new Error()
  }

  static toPersistence(purchase: Purchase) {
    return {
      id: purchase.id,
      customer_id: purchase.customerId,
      product_id: purchase.productId,
      created_at: purchase.createdAt,
    }
  }
}
