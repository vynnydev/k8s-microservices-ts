/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import AppError from '@utils/errors/AppError'
import { Product } from '@domain/models/product/Product'

import { IProductsRepository } from '@domain/application/repositories/IProductsRepository'
import { IFindProduct } from '@domain/application/usecases/product/IFindProduct'

export class FindProduct implements IFindProduct {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(product_id: string): Promise<Product | null> {
    const foundProduct = await this.productsRepository.findById(product_id)

    if (!foundProduct)
      throw new AppError({
        message: 'Product does not exists.',
        status_code: 400,
      })

    return foundProduct
  }
}
