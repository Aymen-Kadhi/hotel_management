import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { HotelDomainFacade } from './hotel.domain.facade'
import { Hotel } from './hotel.model'

@Module({
  imports: [TypeOrmModule.forFeature([Hotel]), DatabaseHelperModule],
  providers: [HotelDomainFacade, HotelDomainFacade],
  exports: [HotelDomainFacade],
})
export class HotelDomainModule {}
