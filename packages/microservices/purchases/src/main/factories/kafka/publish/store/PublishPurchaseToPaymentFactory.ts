import { IPublishPurchaseToPayment } from '@infra/messaging/kafka/protocols/usecases/IPublishPurchaseToPayment'
import { PublishPurchaseToPayment } from '@usecases/kafka/store/PublishPurchaseToPayment'

import findProductFactory from '@main/factories/usecases/product/FindProductFactory'
import findPurchaseProductFactory from '@main/factories/usecases/purchase/FindPurchaseProductFactory'
import prismaCustomersRepositoryFactory from '@main/factories/repositories/PrismaCustomersRepositoryFactory'
import purchaseToPaymentServiceFactory from '@infra/messaging/kafka/factories/services/PurchaseToPaymentServiceFactory'

const makePublishPurchaseToPayment = (): IPublishPurchaseToPayment => {
  const findProduct = findProductFactory.makeFindProductFactory()
  const findPurchaseProduct =
    findPurchaseProductFactory.makeFindPurchaseProduct()
  const customersRepository =
    prismaCustomersRepositoryFactory.makePrismaCustomersRepository()
  const purchaseToPaymentService =
    purchaseToPaymentServiceFactory.makePurchaseToPaymentService()

  const publishPurchaseToPayment = new PublishPurchaseToPayment(
    findProduct,
    findPurchaseProduct,
    customersRepository,
    purchaseToPaymentService,
  )

  return publishPurchaseToPayment
}

export default { makePublishPurchaseToPayment }
