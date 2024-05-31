import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ReservationDomainModule } from '../domain'
import { ReservationController } from './reservation.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ReservationByUserController } from './reservationByUser.controller'

import { RoomDomainModule } from '../../../modules/room/domain'

import { ReservationByRoomController } from './reservationByRoom.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ReservationDomainModule,

    UserDomainModule,

    RoomDomainModule,
  ],
  controllers: [
    ReservationController,

    ReservationByUserController,

    ReservationByRoomController,
  ],
  providers: [],
})
export class ReservationApplicationModule {}
