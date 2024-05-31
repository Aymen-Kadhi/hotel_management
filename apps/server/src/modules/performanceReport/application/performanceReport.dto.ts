import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class PerformanceReportCreateDto {
  @IsString()
  @IsNotEmpty()
  reportDate: string

  @IsNumber()
  @IsNotEmpty()
  performanceScore: number

  @IsString()
  @IsOptional()
  employeeId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class PerformanceReportUpdateDto {
  @IsString()
  @IsOptional()
  reportDate?: string

  @IsNumber()
  @IsOptional()
  performanceScore?: number

  @IsString()
  @IsOptional()
  employeeId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
