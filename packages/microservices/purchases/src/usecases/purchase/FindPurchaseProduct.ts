/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { IPurchasesRepository } from '@domain/application/repositories/IPurchasesRepository'
import { IFindPurchaseProduct } from '@domain/application/usecases/purchase/IFindPurchaseProduct'
import { Purchase } from '@domain/models/purchase/Purchase'
import AppError from '@utils/errors/AppError'

export class FindPurchaseProduct implements IFindPurchaseProduct {
  constructor(private prismaPurchaseRepository: IPurchasesRepository) {}

  async execute(purchase_id: string): Promise<Purchase | null> {
    const foundPurchaseProduct = await this.prismaPurchaseRepository.findById(
      purchase_id,
    )

    if (!foundPurchaseProduct)
      throw new AppError({
        message: 'Purchase does not exists.',
        status_code: 400,
      })

    return foundPurchaseProduct
  }
}
