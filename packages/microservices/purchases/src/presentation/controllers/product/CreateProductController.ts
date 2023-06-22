/* eslint-disable no-useless-constructor */
/* eslint-disable camelcase */
import { IController } from '@presentation/protocols/IController'
import {
  THttpResponse,
  fail,
  clientError,
  created,
} from '@presentation/protocols/HttpResponse'

import { ICreateProduct } from '@domain/application/usecases/product/ICreateProduct'

type TCreateProductControllerRequest = {
  description: string
}

export class CreateProductController implements IController {
  constructor(private createProduct: ICreateProduct) {}

  async handle({
    description,
  }: TCreateProductControllerRequest): Promise<THttpResponse> {
    try {
      const result = await this.createProduct.execute({
        description,
      })

      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          default:
            return clientError(error)
        }
      } else {
        return created()
      }
    } catch (error: any) {
      return fail(error)
    }
  }
}
