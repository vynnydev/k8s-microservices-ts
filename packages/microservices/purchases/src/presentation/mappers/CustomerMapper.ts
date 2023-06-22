import { Customer as PersistenceContact } from '@prisma/client'

import { Customer } from '@domain/models/customer/Customer'
import { Email } from '@domain/models/customer/email'
import { Name } from '@domain/models/customer/name'

export class CustomerMapper {
  static toDomain(raw: PersistenceContact): Customer {
    const nameOrError = Name.create(raw.name)
    const emailOrError = Email.create(raw.email)

    if (nameOrError.isLeft()) {
      throw new Error('Name value is invalid.')
    }

    if (emailOrError.isLeft()) {
      throw new Error('E-mail value is invalid.')
    }

    const customerOrError = Customer.create(
      {
        name: nameOrError.value,
        email: emailOrError.value,
        createdAt: raw.created_at,
      },
      raw.id,
    )

    if (customerOrError.isRight()) {
      return customerOrError.value
    }

    throw new Error()
  }

  static toPersistence(Customer: Customer) {
    return {
      id: Customer.id,
      name: Customer.name.value,
      email: Customer.email.value,
      created_at: Customer.createdAt,
    }
  }
}
