import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Hotel, HotelDomainFacade } from '@server/modules/hotel/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { HotelApplicationEvent } from './hotel.application.event'
import { HotelCreateDto, HotelUpdateDto } from './hotel.dto'

@Controller('/v1/hotels')
export class HotelController {
  constructor(
    private eventService: EventService,
    private hotelDomainFacade: HotelDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.hotelDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: HotelCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.hotelDomainFacade.create(body)

    await this.eventService.emit<HotelApplicationEvent.HotelCreated.Payload>(
      HotelApplicationEvent.HotelCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:hotelId')
  async findOne(@Param('hotelId') hotelId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.hotelDomainFacade.findOneByIdOrFail(
      hotelId,
      queryOptions,
    )

    return item
  }

  @Patch('/:hotelId')
  async update(
    @Param('hotelId') hotelId: string,
    @Body() body: HotelUpdateDto,
  ) {
    const item = await this.hotelDomainFacade.findOneByIdOrFail(hotelId)

    const itemUpdated = await this.hotelDomainFacade.update(
      item,
      body as Partial<Hotel>,
    )
    return itemUpdated
  }

  @Delete('/:hotelId')
  async delete(@Param('hotelId') hotelId: string) {
    const item = await this.hotelDomainFacade.findOneByIdOrFail(hotelId)

    await this.hotelDomainFacade.delete(item)

    return item
  }
}
