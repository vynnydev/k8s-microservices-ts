import { Product } from '@domain/models/product/Product'

export interface IFindProduct {
  execute(product_id: string): Promise<Product | null>
}
