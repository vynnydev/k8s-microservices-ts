export const createProductParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
  },
  required: ['name', 'email', 'product_id'],
}
