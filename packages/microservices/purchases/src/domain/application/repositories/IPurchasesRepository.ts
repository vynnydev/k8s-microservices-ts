import { Purchase } from '@domain/models/purchase/Purchase'

export interface IPurchasesRepository {
  create(purchase: Purchase): Promise<void>
  findById(id: string): Promise<Purchase | null>
}
