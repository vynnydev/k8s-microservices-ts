/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { prisma } from '@infra/external/prisma/client'

import { Customer } from '@domain/models/customer/Customer'
import { CustomerMapper } from '@presentation/mappers/CustomerMapper'
import { ICustomersRepository } from '@domain/application/repositories/ICustomersRepository'
import AppError from '@utils/errors/AppError'

export class PrismaOrmCustomersRepository implements ICustomersRepository {
  async create(customer: Customer): Promise<void> {
    const data = CustomerMapper.toPersistence(customer)

    await prisma.customer.create({ data })
  }

  async findCustomerByPurchaseId(
    purchase_id: string,
  ): Promise<Customer | null> {
    const foundCustomersAndPurchases = await prisma.customer.findMany({
      where: {
        purchases: {
          some: {},
        },
      },
      include: {
        purchases: true,
      },
    })

    // const purchase_id = '1'

    // const source = [
    //   {
    //     id: '1',
    //     nome: 'Maluf',
    //     cpf: '007.519.591-20',
    //     purchases: [{ id: '1', nome: 'Vinicius', cpf: '466.040.571.46' }],
    //   },
    // ]

    const reduceCP = foundCustomersAndPurchases.reduce((acc, a) =>
      Object.assign(acc, a),
    )
    const result = reduceCP.purchases.some(
      (purchase) => purchase.id === purchase_id,
    )

    if (result) {
      const reduceCustomerInObject = foundCustomersAndPurchases
        .map((customer) => ({
          ...customer,
        }))
        .reduce(Object.assign({}))

      return CustomerMapper.toDomain(reduceCustomerInObject)
    }

    throw new AppError({ message: 'Error', status_code: 400 })
  }
}
