import { Express } from 'express'

import purchasesProductsRouter from '@main/core/http/routes/PurchasesProductsRouter'
import productRouter from '@main/core/http/routes/ProductRouter'

export default (app: Express): void => {
  app.use(`/api/v1/purchases`, purchasesProductsRouter.router)
  app.use(`/api/v1/products`, productRouter.router)
}
