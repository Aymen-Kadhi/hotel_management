import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class InvoiceCreateDto {
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number

  @IsString()
  @IsNotEmpty()
  issueDate: string

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

export class InvoiceUpdateDto {
  @IsNumber()
  @IsOptional()
  totalAmount?: number

  @IsString()
  @IsOptional()
  issueDate?: string

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
