import { IPurchaseToPaymentService } from '@infra/messaging/kafka/services/implementations/store/publish/protocols/IPurchaseToPaymentService'
import { PurchaseToPaymentService } from '@infra/messaging/kafka/services/implementations/store/publish/PurchaseToPaymentService'

const makePurchaseToPaymentService = (): IPurchaseToPaymentService => {
  const purchaseToPaymentService = new PurchaseToPaymentService()

  return purchaseToPaymentService
}

export default { makePurchaseToPaymentService }
