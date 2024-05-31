import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { HotelDomainModule } from '../domain'
import { HotelController } from './hotel.controller'

@Module({
  imports: [AuthenticationDomainModule, HotelDomainModule],
  controllers: [HotelController],
  providers: [],
})
export class HotelApplicationModule {}
