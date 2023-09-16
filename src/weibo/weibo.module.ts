import { Module } from '@nestjs/common'
import { WeiboService } from './weibo.service'
import { WeiboController } from './weibo.controller'

@Module({
  controllers: [WeiboController],
  providers: [WeiboService],
})
export class WeiboModule {}
