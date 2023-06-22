import {
  TCreatePurchaseRequest,
  TCreatePurchaseResponse,
} from './dtos/TCreatePurchaseProductDTO'

export interface ICreatePurchaseProduct {
  execute(data: TCreatePurchaseRequest): Promise<TCreatePurchaseResponse>
}
