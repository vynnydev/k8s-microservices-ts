import { IDomainError } from '@domain/application/core/domain/errors/IDomainError'

export class InvalidNameError extends Error implements IDomainError {
  constructor(name: string) {
    super(`The name "${name}" is invalid.`)
    this.name = 'InvalidNameError'
  }
}
