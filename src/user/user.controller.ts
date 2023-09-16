import { ParseIntPipe, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UserService } from './user.service'
import { ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from './dto/create-user.dto'
import { UserPipe } from './user.pipe'

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
  async findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id)
    const result = await this.userService.findOne(id)
    return result
  }

  @Post('create')
  create(@Body() data: CreateUserDto) {
    const result = this.userService.create(data)
    return result
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    const result = await this.userService.delete(id)
    return result
  }

  @Put('update')
  async update(@Body() data: any) {
    const result = await this.userService.update(data)
    return result
  }
}
