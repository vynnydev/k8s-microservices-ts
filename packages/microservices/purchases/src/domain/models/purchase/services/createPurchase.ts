import { Purchase } from '../Purchase'

type TCreatePurchaseRequest = {
  customerId: string
  productId: string
}

export function createPurchase({
  customerId,
  productId,
}: TCreatePurchaseRequest): Purchase {
  const purchaseOrError = Purchase.create({
    customerId,
    productId,
  })

  return purchaseOrError
}
