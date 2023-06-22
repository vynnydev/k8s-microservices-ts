import IValidateOrigin from '@domain/application/core/cors/IValidateOrigin'

import ValidateOrigin from '@main/core/cors/ValidateOrigin'

const makeValidateOrigin = (): IValidateOrigin => {
  const validateOrigin = new ValidateOrigin()

  return validateOrigin
}

export default { makeValidateOrigin }
