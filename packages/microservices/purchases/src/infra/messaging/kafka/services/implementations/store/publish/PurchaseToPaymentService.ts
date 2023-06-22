/* eslint-disable camelcase */
import { client } from '@infra/messaging/kafka/Kafka'

import {
  IPurchaseToPaymentService,
  IPurchaseToPaymentServiceDTO,
} from './protocols/IPurchaseToPaymentService'

export class PurchaseToPaymentService implements IPurchaseToPaymentService {
  async addPurchaseToOrderStore({
    product,
    customer,
    purchase_id,
  }: IPurchaseToPaymentServiceDTO): Promise<void> {
    const purchaseToOrderStore = {
      product: {
        id: product.id,
        description: product.description,
      },
      customer: {
        name: customer.name,
        email: customer.email,
      },
      purchase_id,
    }

    await client.producer().send({
      topic: 'add-purchase-to-payment',
      messages: [{ value: JSON.stringify(purchaseToOrderStore) }],
    })
  }
}
