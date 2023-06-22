import {
  createProductParamsSchema,
  createProductResponseSchema,
} from './schemas/product'
import {
  createPurchaseParamsSchema,
  createPurchaseResponseSchema,
} from './schemas/purchase'
import { errorSchema } from './schemas/error'

export default {
  createProductParams: createProductParamsSchema,
  createProductResponse: createProductResponseSchema,
  createPurchaseParams: createPurchaseParamsSchema,
  createPurchaseResponse: createPurchaseResponseSchema,
  error: errorSchema,
}
