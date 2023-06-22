import {
  TCreateProductRequest,
  TCreateProductResponse,
} from './dtos/TCreateProduct'

export interface ICreateProduct {
  execute(data: TCreateProductRequest): Promise<TCreateProductResponse>
}
