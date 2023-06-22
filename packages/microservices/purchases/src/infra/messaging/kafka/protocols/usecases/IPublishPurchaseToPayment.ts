import { Purchase } from '@domain/models/purchase/Purchase'

export interface IPublishPurchaseToPaymentDTO {
  product_id: string
  purchase: Purchase
}

export interface IPublishPurchaseToPayment {
  execute(data: IPublishPurchaseToPaymentDTO): Promise<void>
}
