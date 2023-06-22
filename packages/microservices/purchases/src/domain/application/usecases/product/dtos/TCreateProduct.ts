import { Either } from '@main/core/logic/Either'
import { Product } from '@domain/models/product/Product'
import { InvalidDescriptionLengthError } from '@utils/errors/InvalidDescriptionLengthError'

export type TCreateProductRequest = {
  description: string
}

export type TCreateProductResponse = Either<
  InvalidDescriptionLengthError,
  Product
>
