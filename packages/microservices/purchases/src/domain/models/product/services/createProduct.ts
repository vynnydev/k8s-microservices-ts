import { Product } from '../Product'
import { Description } from '../description'

import { Either, left } from '@main/core/logic/Either'
import { InvalidDescriptionLengthError } from '@utils/errors/InvalidDescriptionLengthError'

type TCreateProductRequest = {
  description: string
}

type TCreateProductResponse = Either<InvalidDescriptionLengthError, Product>

export function createProduct({
  description,
}: TCreateProductRequest): TCreateProductResponse {
  const descriptionOrError = Description.create(description)

  if (descriptionOrError.isLeft()) return left(descriptionOrError.value)

  const productOrError = Product.create({
    description: descriptionOrError.value,
  })

  return productOrError
}
