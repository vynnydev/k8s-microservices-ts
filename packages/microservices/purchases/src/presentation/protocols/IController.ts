import { THttpResponse } from './HttpResponse'

export interface IController<T = any> {
  handle: (request: T) => Promise<THttpResponse>
}
