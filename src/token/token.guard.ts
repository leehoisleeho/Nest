import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import type { Request, Response } from 'express'
@Injectable()
export class TokenGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>()
    let token = request.headers.authorization
    if (token) {
      return true
    } else {
      throw new HttpException('没有权限', 403)
    }
  }
}
