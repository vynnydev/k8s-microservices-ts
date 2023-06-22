import { IDomainError } from '@domain/application/core/domain/errors/IDomainError'

export class InvalidEmailError extends Error implements IDomainError {
  constructor(email: string) {
    super(`The email "${email}" is invalid.`)
    this.name = 'InvalidEmailError'
  }
}
