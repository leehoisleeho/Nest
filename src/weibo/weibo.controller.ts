import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { WeiboService } from './weibo.service'
import { CreateDoubanDto } from './dto/create-douban.dto'
import { UpdateDoubanDto } from './dto/update-douban.dto'

@Controller('weibo')
export class WeiboController {
  constructor(private readonly weiboService: WeiboService) {}
  @Get('find')
  find() {
    return this.weiboService.find()
  }
}
