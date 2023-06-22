/* eslint-disable no-useless-constructor */
/* eslint-disable camelcase */
import AppError from '@utils/errors/AppError'
import {
  IPublishPurchaseToPaymentDTO,
  IPublishPurchaseToPayment,
} from '@infra/messaging/kafka/protocols/usecases/IPublishPurchaseToPayment'

import { IFindProduct } from '@domain/application/usecases/product/IFindProduct'
import { ICustomersRepository } from '@domain/application/repositories/ICustomersRepository'
import { IPurchaseToPaymentService } from '@infra/messaging/kafka/services/implementations/store/publish/protocols/IPurchaseToPaymentService'
import { IFindPurchaseProduct } from '@domain/application/usecases/purchase/IFindPurchaseProduct'

export class PublishPurchaseToPayment implements IPublishPurchaseToPayment {
  constructor(
    private findProduct: IFindProduct,
    private findPurchase: IFindPurchaseProduct,
    private customersRepository: ICustomersRepository,
    private purchaseToPaymentService: IPurchaseToPaymentService,
  ) {}

  async execute({
    product_id,
    purchase,
  }: IPublishPurchaseToPaymentDTO): Promise<void> {
    const foundProduct = await this.findProduct.execute(product_id)

    if (!foundProduct)
      throw new AppError({
        message: 'Product does not exists.',
        status_code: 400,
      })

    const foundPurchase = await this.findPurchase.execute(purchase.id)
    if (!foundPurchase)
      throw new AppError({
        message: 'Purchase does not exists.',
        status_code: 400,
      })

    const foundCustomerByPurchaseId =
      await this.customersRepository.findCustomerByPurchaseId(foundPurchase.id)

    if (!foundCustomerByPurchaseId)
      throw new AppError({
        message: 'Customer does not exists.',
        status_code: 400,
      })

    await this.purchaseToPaymentService.addPurchaseToOrderStore({
      product: foundProduct,
      customer: foundCustomerByPurchaseId,
      purchase_id: foundPurchase.id,
    })
  }
}
