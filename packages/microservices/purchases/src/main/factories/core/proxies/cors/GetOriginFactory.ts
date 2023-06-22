import IGetOrigin from '@domain/application/core/cors/IGetOrigin'

import GetOrigin from '@main/core/cors/GetOrigin'

const makeGetOrigin = (): IGetOrigin => {
  const getOrigin = new GetOrigin()

  return getOrigin
}

export default { makeGetOrigin }
