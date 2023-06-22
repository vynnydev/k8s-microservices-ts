export const createProductPath = {
  post: {
    tags: ['Product'],
    summary: 'Router for create product',
    description: 'This route can be run by **any account**.',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createProductParams',
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
              $ref: '#/schemas/createProductResponse',
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
