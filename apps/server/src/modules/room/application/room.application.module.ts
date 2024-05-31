import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { RoomDomainModule } from '../domain'
import { RoomController } from './room.controller'

import { HotelDomainModule } from '../../../modules/hotel/domain'

import { RoomByHotelController } from './roomByHotel.controller'

@Module({
  imports: [AuthenticationDomainModule, RoomDomainModule, HotelDomainModule],
  controllers: [RoomController, RoomByHotelController],
  providers: [],
})
export class RoomApplicationModule {}
