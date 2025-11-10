/* eslint-disable prettier/prettier */
import { IsInt, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class MuseumsQueryDto {
  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  name?: string;

  // Devuelve museos con año de fundación < foundedBefore
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  foundedBefore?: number;

  // Paginación
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit: number = 10;
}

