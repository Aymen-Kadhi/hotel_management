import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ReservationCreateDto {
  @IsString()
  @IsNotEmpty()
  checkInDate: string

  @IsString()
  @IsNotEmpty()
  checkOutDate: string

  @IsString()
  @IsNotEmpty()
  status: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  roomId?: string

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

export class ReservationUpdateDto {
  @IsString()
  @IsOptional()
  checkInDate?: string

  @IsString()
  @IsOptional()
  checkOutDate?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  roomId?: string

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
