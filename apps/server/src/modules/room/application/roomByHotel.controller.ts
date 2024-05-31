import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { RoomDomainFacade } from '@server/modules/room/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RoomApplicationEvent } from './room.application.event'
import { RoomCreateDto } from './room.dto'

import { HotelDomainFacade } from '../../hotel/domain'

@Controller('/v1/hotels')
export class RoomByHotelController {
  constructor(
    private hotelDomainFacade: HotelDomainFacade,

    private roomDomainFacade: RoomDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/hotel/:hotelId/rooms')
  async findManyHotelId(
    @Param('hotelId') hotelId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.hotelDomainFacade.findOneByIdOrFail(hotelId)

    const items = await this.roomDomainFacade.findManyByHotel(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/hotel/:hotelId/rooms')
  async createByHotelId(
    @Param('hotelId') hotelId: string,
    @Body() body: RoomCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, hotelId }

    const item = await this.roomDomainFacade.create(valuesUpdated)

    await this.eventService.emit<RoomApplicationEvent.RoomCreated.Payload>(
      RoomApplicationEvent.RoomCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
