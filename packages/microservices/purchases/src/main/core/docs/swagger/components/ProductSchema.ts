export const productSchema = {
  Products: {
    type: 'object',
    properties: {
      description: {
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
