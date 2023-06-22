import logger from '@infra/external/logger/pino/logger'

export type THttpResponse = {
  statusCode: number
  body: any
}

export function ok<T>(dto?: T): THttpResponse {
  return {
    statusCode: 200,
    body: dto,
  }
}

export function created(): THttpResponse {
  return {
    statusCode: 201,
    body: undefined,
  }
}

export function clientError(error: Error): THttpResponse {
  return {
    statusCode: 400,
    body: {
      error: error.message,
    },
  }
}

export function unauthorized(error: Error): THttpResponse {
  return {
    statusCode: 401,
    body: {
      error: error.message,
    },
  }
}

export function forbidden(error: Error): THttpResponse {
  return {
    statusCode: 403,
    body: {
      error: error.message,
    },
  }
}

export function notFound(error: Error): THttpResponse {
  return {
    statusCode: 404,
    body: {
      error: error.message,
    },
  }
}

export function conflict(error: Error): THttpResponse {
  return {
    statusCode: 409,
    body: {
      error: error.message,
    },
  }
}

export function tooMany(error: Error): THttpResponse {
  return {
    statusCode: 429,
    body: {
      error: error.message,
    },
  }
}

export function fail(error: Error) {
  logger.error(`Error: ${error}`)

  return {
    statusCode: 500,
    body: {
      error: error.message,
    },
  }
}
