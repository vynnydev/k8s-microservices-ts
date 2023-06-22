import { Either, left } from '@main/core/logic/Either'

import { Customer } from '../Customer'
import { Name } from '../name'
import { Email } from '../email'

import { InvalidDescriptionLengthError } from '@utils/errors/InvalidDescriptionLengthError'

type TCreateCustomerRequest = {
  name: string
  email: string
}

type TCreateCustomerResponse = Either<InvalidDescriptionLengthError, Customer>

export function createCustomer({
  name,
  email,
}: TCreateCustomerRequest): TCreateCustomerResponse {
  const nameOrError = Name.create(name)
  const emailOrError = Email.create(email)

  if (nameOrError.isLeft()) return left(nameOrError.value)
  if (emailOrError.isLeft()) return left(emailOrError.value)

  const customerOrError = Customer.create({
    name: nameOrError.value,
    email: emailOrError.value,
  })

  return customerOrError
}
