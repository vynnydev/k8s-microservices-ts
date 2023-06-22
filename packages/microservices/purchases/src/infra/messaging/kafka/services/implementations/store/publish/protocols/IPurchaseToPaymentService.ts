import { Customer } from '@domain/models/customer/Customer'
import { Product } from '@domain/models/product/Product'

export interface IPurchaseToPaymentServiceDTO {
  product: Product
  customer: Customer
  purchase_id: string
}

export interface IPurchaseToPaymentService {
  addPurchaseToOrderStore(data: IPurchaseToPaymentServiceDTO): Promise<void>
}
