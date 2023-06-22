export const createPurchaseResponseSchema = {
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
    created_at: {
      type: 'Date',
    },
    updated_at: {
      type: 'Date',
    },
  },
  required: ['name', 'email', 'product_id', 'created_at', 'updated_at'],
}
