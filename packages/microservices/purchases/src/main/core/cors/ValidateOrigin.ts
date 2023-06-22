import IValidateOrigin from '@domain/application/core/cors/IValidateOrigin'

export default class ValidateOrigin implements IValidateOrigin {
  public isValid(domain: string): boolean {
    const allowedDomains = ['https://localhost:3000', 'http://localhost:3000']

    return allowedDomains.includes(domain)
  }
}
