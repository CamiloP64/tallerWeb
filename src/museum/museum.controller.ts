/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MuseumService } from './museum.service';
import { MuseumEntity } from './museum.entity';
import { MuseumsQueryDto } from './museums-query.dto';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';

@Controller('museums')
@UseInterceptors(BusinessErrorsInterceptor)
export class MuseumController {
  constructor(private readonly museumService: MuseumService) {}

  @Get()
  async findAll(@Query() query: MuseumsQueryDto) {
    return await this.museumService.findAllAndPaginate(query);
  }

  @Get(':museumId')
  async findOne(@Param('museumId') museumId: string) {
    return await this.museumService.findOne(museumId);
  }

  @Post()
  async create(@Body() dto: Partial<MuseumEntity>) {
    const museum = plainToInstance(MuseumEntity, dto);
    return await this.museumService.create(museum);
  }

  @Put(':museumId')
  async update(@Param('museumId') museumId: string, @Body() dto: Partial<MuseumEntity>) {
    const museum = plainToInstance(MuseumEntity, dto);
    return await this.museumService.update(museumId, museum);
  }

  @Delete(':museumId')
  @HttpCode(204)
  async delete(@Param('museumId') museumId: string) {
    await this.museumService.delete(museumId);
  }
}
