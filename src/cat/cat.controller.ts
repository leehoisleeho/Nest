import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { CatService } from './cat.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger'

@ApiTags('猫咪')
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catService.create(createCatDto)
  }

  @Get('/findAll')
  @ApiOperation({ summary: '获取喵咪列表' })
  findAll() {
    return this.catService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id)
  }
}
