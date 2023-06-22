export const createPurchaseParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    product_id: {
      type: 'string',
    },
  },
  required: ['name', 'email', 'product_id'],
}
