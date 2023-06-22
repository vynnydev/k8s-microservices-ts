import { Purchase } from '@domain/models/purchase/Purchase'

export type TCreatePurchaseRequest = {
  name: string
  email: string
  product_id: string
}

export type TCreatePurchaseResponse = Purchase
