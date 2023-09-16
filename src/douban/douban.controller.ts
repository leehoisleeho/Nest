import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { DoubanService } from './douban.service'
import { CreateDoubanDto } from './dto/create-douban.dto'
import { UpdateDoubanDto } from './dto/update-douban.dto'

@Controller('douban')
export class DoubanController {
  constructor(private readonly doubanService: DoubanService) {}
  @Get('find')
  find() {
    return this.doubanService.find()
  }
  @Get('details')
  details() {
    return this.doubanService.userDetails()
  }
}
