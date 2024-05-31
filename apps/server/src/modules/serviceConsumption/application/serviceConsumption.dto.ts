import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ServiceConsumptionCreateDto {
  @IsString()
  @IsNotEmpty()
  serviceName: string

  @IsNumber()
  @IsNotEmpty()
  cost: number

  @IsString()
  @IsOptional()
  reservationId?: string

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

export class ServiceConsumptionUpdateDto {
  @IsString()
  @IsOptional()
  serviceName?: string

  @IsNumber()
  @IsOptional()
  cost?: number

  @IsString()
  @IsOptional()
  reservationId?: string

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
