import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UserService } from './user.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('find')
  find() {
    const result = this.userService.find()
    return result
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: any) {
    const result = await this.userService.findOne(id)
    return result
  }

  @Post('create')
  create(@Body() data: any) {
    const result = this.userService.create(data)
    return result
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    id = Number(id)
    const result = await this.userService.delete(id)
    return result
  }

  @Put('update')
  async update(@Body() data: any) {
    const result = await this.userService.update(data)
    return result
  }
}
