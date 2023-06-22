export interface IMessagingAdapter {
  sendMessage(topic: string, message: any): Promise<void>
}
