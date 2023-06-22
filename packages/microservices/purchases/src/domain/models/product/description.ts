import { Either, left, right } from '@main/core/logic/Either'

import { InvalidNameError } from '@utils/errors/InvalidNameError'

export class Description {
  private readonly description: string

  get value(): string {
    return this.description
  }

  private constructor(description: string) {
    this.description = description
  }

  static validate(description: string): boolean {
    if (
      !description ||
      description.trim().length < 2 ||
      description.trim().length > 350
    ) {
      return false
    }

    return true
  }

  static create(description: string): Either<InvalidNameError, Description> {
    if (!this.validate(description)) {
      return left(new InvalidNameError(description))
    }

    return right(new Description(description))
  }
}
