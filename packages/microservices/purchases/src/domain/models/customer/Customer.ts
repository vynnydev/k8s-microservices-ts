/* eslint-disable no-useless-constructor */
import { Entity } from '@main/core/domain/Entity'
import { Either, right } from '@main/core/logic/Either'

import { Name } from './name'
import { Email } from './email'
import { InvalidNameError } from '@utils/errors/InvalidNameError'
import { InvalidEmailError } from '@utils/errors/InvalidEmailError'

interface ICustomerProps {
  name: Name
  email: Email
  createdAt?: Date
}

export class Customer extends Entity<ICustomerProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get createdAt() {
    return this.props.createdAt
  }

  set name(name: Name) {
    this.props.name = name
  }

  set email(email: Email) {
    this.props.email = email
  }

  private constructor(props: ICustomerProps, id?: string) {
    super(props, id)
  }

  static create(
    props: ICustomerProps,
    id?: string,
  ): Either<InvalidNameError | InvalidEmailError, Customer> {
    const customer = new Customer(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return right(customer)
  }
}
