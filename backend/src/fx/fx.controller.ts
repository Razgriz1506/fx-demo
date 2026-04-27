import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FxService } from './fx.service';
import { CreateFxDto } from './create-fx.dto';

@Controller('fx-requests')
export class FxController {
  constructor(private fxService: FxService) {}

  @Get()
  findAll() {
    return this.fxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fxService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateFxDto) {
    return this.fxService.create(dto);
  }
}