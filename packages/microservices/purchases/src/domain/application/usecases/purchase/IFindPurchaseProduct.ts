import { Purchase } from '@domain/models/purchase/Purchase'

export interface IFindPurchaseProduct {
  execute(purchase_id: string): Promise<Purchase | null>
}
