import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class RoomCreateDto {
  @IsString()
  @IsNotEmpty()
  roomNumber: string

  @IsString()
  @IsNotEmpty()
  type: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsString()
  @IsNotEmpty()
  availabilityStatus: string

  @IsString()
  @IsOptional()
  hotelId?: string

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

export class RoomUpdateDto {
  @IsString()
  @IsOptional()
  roomNumber?: string

  @IsString()
  @IsOptional()
  type?: string

  @IsNumber()
  @IsOptional()
  price?: number

  @IsString()
  @IsOptional()
  availabilityStatus?: string

  @IsString()
  @IsOptional()
  hotelId?: string

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
