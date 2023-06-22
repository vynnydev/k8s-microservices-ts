export const customerSchema = {
  Customers: {
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
  },
}
