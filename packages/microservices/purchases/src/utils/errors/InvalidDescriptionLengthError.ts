import { IDomainError } from '@domain/application/core/domain/errors/IDomainError'

export class InvalidDescriptionLengthError
  extends Error
  implements IDomainError
{
  constructor() {
    super(`The description must have between 3 and 350 characters.`)
    this.name = 'InvalidTitleLengthError'
  }
}
