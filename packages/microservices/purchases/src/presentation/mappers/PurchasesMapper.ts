import { Purchase as PersistencePurchase } from '@prisma/client'

import { Purchase } from '@domain/models/purchase/Purchase'
import { OrderDescription } from '@domain/models/purchase/OrderDescription'

export class PurchasesMapper {
  static toDomain(raw: PersistencePurchase): Purchase {
    const orderDescriptionOrError = OrderDescription.create(
      raw.order_description,
    )

    if (orderDescriptionOrError.isLeft()) {
      throw new Error('Order description value is invalid.')
    }

    const purchaseOrError = Purchase.create(
      {
        customerId: raw.customer_id,
        productId: raw.product_id,
        orderDescription: orderDescriptionOrError.value,
        createdAt: raw.created_at,
      },
      raw.id,
    )

    if (purchaseOrError.isRight()) {
      return purchaseOrError.value
    }

    throw new Error()
  }

  static toPersistence(purchase: Purchase) {
    return {
      id: purchase.id,
      customer_id: purchase.customerId,
      product_id: purchase.productId,
      order_description: purchase.orderDescription.value,
      created_at: purchase.createdAt,
    }
  }
}
