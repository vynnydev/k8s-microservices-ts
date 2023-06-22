/* eslint-disable no-useless-constructor */
/* eslint-disable camelcase */
import { IController } from '@presentation/protocols/IController'
import {
  THttpResponse,
  fail,
  created,
} from '@presentation/protocols/HttpResponse'

import { ICreatePurchaseProduct } from '@domain/application/usecases/purchase/ICreatePurchaseProduct'
import { IPublishPurchaseToPayment } from '@infra/messaging/kafka/protocols/usecases/IPublishPurchaseToPayment'
import AppError from '@utils/errors/AppError'

type TCreatePurchaseProductControllerRequest = {
  name: string
  email: string
  product_id: string
}

export class CreatePurchaseProductController implements IController {
  constructor(
    private createPurchaseProduct: ICreatePurchaseProduct,
    private publishPurchaseToPayment: IPublishPurchaseToPayment,
  ) {}

  async handle({
    name,
    email,
    product_id,
  }: TCreatePurchaseProductControllerRequest): Promise<THttpResponse> {
    try {
      const createdPurchaseProduct = await this.createPurchaseProduct.execute({
        name,
        email,
        product_id,
      })

      await this.publishPurchaseToPayment.execute({
        product_id,
        purchase: createdPurchaseProduct,
      })

      if (createdPurchaseProduct) {
        throw new AppError({ message: 'Could not purchase!', status_code: 400 })
      } else {
        return created()
      }
    } catch (error: any) {
      return fail(error)
    }
  }
}
