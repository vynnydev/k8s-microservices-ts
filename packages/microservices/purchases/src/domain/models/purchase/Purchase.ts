/* eslint-disable no-useless-constructor */
import { Entity } from '@main/core/domain/Entity'

interface IPurchaseProps {
  customerId: string
  productId: string
  createdAt?: Date
}

export class Purchase extends Entity<IPurchaseProps> {
  get customerId() {
    return this.props.customerId
  }

  get productId() {
    return this.props.productId
  }

  get createdAt() {
    return this.props.createdAt
  }

  set customerId(customerId: string) {
    this.props.customerId = customerId
  }

  set productId(productId: string) {
    this.props.productId = productId
  }

  constructor(props: IPurchaseProps, id?: string) {
    super(props, id)
  }

  static create(props: IPurchaseProps, id?: string): Purchase {
    const purchase = new Purchase(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return purchase
  }
}
