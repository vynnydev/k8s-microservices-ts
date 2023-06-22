export const purchaseSchema = {
  Purchases: {
    type: 'object',
    properties: {
      customer_id: {
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
  },
}
