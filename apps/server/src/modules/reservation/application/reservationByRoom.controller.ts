import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ReservationDomainFacade } from '@server/modules/reservation/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ReservationApplicationEvent } from './reservation.application.event'
import { ReservationCreateDto } from './reservation.dto'

import { RoomDomainFacade } from '../../room/domain'

@Controller('/v1/rooms')
export class ReservationByRoomController {
  constructor(
    private roomDomainFacade: RoomDomainFacade,

    private reservationDomainFacade: ReservationDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/room/:roomId/reservations')
  async findManyRoomId(
    @Param('roomId') roomId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.roomDomainFacade.findOneByIdOrFail(roomId)

    const items = await this.reservationDomainFacade.findManyByRoom(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/room/:roomId/reservations')
  async createByRoomId(
    @Param('roomId') roomId: string,
    @Body() body: ReservationCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, roomId }

    const item = await this.reservationDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ReservationApplicationEvent.ReservationCreated.Payload>(
      ReservationApplicationEvent.ReservationCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
