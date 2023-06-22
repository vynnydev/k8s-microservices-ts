/* eslint-disable no-useless-constructor */
import { Entity } from '@main/core/domain/Entity'
import { InvalidDescriptionLengthError } from '@utils/errors/InvalidDescriptionLengthError'

import { Description } from './description'
import { Either, right } from '@main/core/logic/Either'

interface IProductProps {
  description: Description
  createdAt?: Date
}

export class Product extends Entity<IProductProps> {
  get description() {
    return this.props.description
  }

  get createdAt() {
    return this.props.createdAt
  }

  set description(description: Description) {
    this.props.description = description
  }

  constructor(props: IProductProps, id?: string) {
    super(props, id)
  }

  static create(
    props: IProductProps,
    id?: string,
  ): Either<InvalidDescriptionLengthError, Product> {
    const product = new Product(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return right(product)
  }
}
