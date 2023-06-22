export const createProductResponseSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    created_at: {
      type: 'Date',
    },
    updated_at: {
      type: 'Date',
    },
  },
  required: ['name', 'email', 'created_at', 'updated_at'],
}
