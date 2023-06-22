/* eslint-disable no-useless-constructor */
import { IProductsRepository } from '@domain/application/repositories/IProductsRepository'

import { ICreateProduct } from '@domain/application/usecases/product/ICreateProduct'
import {
  TCreateProductRequest,
  TCreateProductResponse,
} from '@domain/application/usecases/product/dtos/TCreateProduct'

import { createProduct } from '@domain/models/product/services/createProduct'
import { left, right } from '@main/core/logic/Either'

export class CreateProduct implements ICreateProduct {
  constructor(private productsRepository: IProductsRepository) {}

  async execute({
    description,
  }: TCreateProductRequest): Promise<TCreateProductResponse> {
    const createdProductOrError = createProduct({
      description,
    })

    if (createdProductOrError.isLeft()) return left(createdProductOrError.value)
    const createdProduct = createdProductOrError.value
    await this.productsRepository.create(createdProduct)

    return right(createdProduct)
  }
}
