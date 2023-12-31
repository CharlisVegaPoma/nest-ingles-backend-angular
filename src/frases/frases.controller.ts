import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { FrasesService } from './frases.service';
import { CreateFraseDto } from './dto/create-frase.dto';
import { UpdateFraseDto } from './dto/update-frase.dto';

import { Frase } from './entities/frase.entity';

@Controller('frases')
export class FrasesController {
  constructor(private readonly frasesService: FrasesService) { }

  @Post()
  create(@Body() createFraseDto: CreateFraseDto): Promise<Frase> {

    return this.frasesService.create(createFraseDto);

  }

  @Get()
  findAll() {
    return this.frasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.frasesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFraseDto: UpdateFraseDto) {
    return this.frasesService.update(id, updateFraseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.frasesService.remove(id);
  }
}
