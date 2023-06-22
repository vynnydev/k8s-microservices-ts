export const createPurchaseProductPath = {
  post: {
    tags: ['PurchaseProduct'],
    summary: 'Router for create purchase product',
    description: 'This route can be run by **any account**.',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createPurchaseProductParams',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/createPurchaseProductResponse',
            },
          },
        },
      },
      400: {
        $ref: '#/helpers/badRequest',
      },
      401: {
        $ref: '#/helpers/unauthorized',
      },
      404: {
        $ref: '#/helpers/notFound',
      },
      500: {
        $ref: '#/helpers/serverError',
      },
    },
  },
}
