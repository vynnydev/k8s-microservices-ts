import { createProductPath } from './paths/product/CreateProductPath'
import { createPurchaseProductPath } from './paths/purchase/CreatePurchaseProductPath'

export default {
  '/product/create': createProductPath,
  '/purchase/create': createPurchaseProductPath,
}
