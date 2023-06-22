/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { createCustomer } from '@domain/models/customer/services/createCustomer'
import { createPurchase } from '@domain/models/purchase/services/createPurchase'

import { ICreatePurchaseProduct } from '@domain/application/usecases/purchase/ICreatePurchaseProduct'
import {
  TCreatePurchaseRequest,
  TCreatePurchaseResponse,
} from '@domain/application/usecases/purchase/dtos/TCreatePurchaseProductDTO'

import AppError from '@utils/errors/AppError'

import { ICreateProduct } from '@domain/application/usecases/product/ICreateProduct'
import { ICustomersRepository } from '@domain/application/repositories/ICustomersRepository'
import { IPurchasesRepository } from '@domain/application/repositories/IPurchasesRepository'

import { IFindProduct } from '@domain/application/usecases/product/IFindProduct'

export class CreatePurchaseProduct implements ICreatePurchaseProduct {
  constructor(
    private customersRepository: ICustomersRepository,
    private purchasesRepository: IPurchasesRepository,
    private findProduct: IFindProduct,
    private createProduct: ICreateProduct,
  ) {}

  async execute({
    name,
    email,
    product_id,
  }: TCreatePurchaseRequest): Promise<TCreatePurchaseResponse> {
    const foundProduct = await this.findProduct.execute(product_id)

    if (!foundProduct)
      throw new AppError({
        message: 'Product does not exists.',
        status_code: 400,
      })

    const createdCustomerOrError = createCustomer({
      name,
      email,
    })
    if (createdCustomerOrError.isLeft())
      throw new AppError({
        message: 'Could not create customer.',
        status_code: 400,
      })
    const customer = createdCustomerOrError.value
    await this.customersRepository.create(customer)

    const createdPurchase = createPurchase({
      customerId: customer.id,
      productId: foundProduct.id,
    })
    if (!createdPurchase)
      throw new AppError({
        message: 'Could not create purchase.',
        status_code: 400,
      })
    const createdCreatePurchaseProduct = createdPurchase
    await this.purchasesRepository.create(createdCreatePurchaseProduct)

    return createdCreatePurchaseProduct
  }
}
