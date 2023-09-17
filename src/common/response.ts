import { NestInterceptor, CallHandler, ExecutionContext, Injectable } from '@nestjs/common'
import { map } from 'rxjs/operators'

interface Ires {
  data: any
  error: 0 | 1
  msg: string
}
@Injectable()
export class Response<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log(context)
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          error: 0,
          msg: 'ok',
        }
      }),
    )
  }
}
