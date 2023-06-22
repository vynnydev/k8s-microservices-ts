import { Customer } from '@domain/models/customer/Customer'

export interface ICustomersRepository {
  create(customer: Customer): Promise<void>
  findCustomerByPurchaseId(purchase_id: string): Promise<Customer | null>
}
