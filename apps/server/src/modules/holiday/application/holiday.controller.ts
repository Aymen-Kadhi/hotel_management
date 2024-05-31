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
import { Holiday, HolidayDomainFacade } from '@server/modules/holiday/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { HolidayApplicationEvent } from './holiday.application.event'
import { HolidayCreateDto, HolidayUpdateDto } from './holiday.dto'

@Controller('/v1/holidays')
export class HolidayController {
  constructor(
    private eventService: EventService,
    private holidayDomainFacade: HolidayDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.holidayDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: HolidayCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.holidayDomainFacade.create(body)

    await this.eventService.emit<HolidayApplicationEvent.HolidayCreated.Payload>(
      HolidayApplicationEvent.HolidayCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:holidayId')
  async findOne(
    @Param('holidayId') holidayId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.holidayDomainFacade.findOneByIdOrFail(
      holidayId,
      queryOptions,
    )

    return item
  }

  @Patch('/:holidayId')
  async update(
    @Param('holidayId') holidayId: string,
    @Body() body: HolidayUpdateDto,
  ) {
    const item = await this.holidayDomainFacade.findOneByIdOrFail(holidayId)

    const itemUpdated = await this.holidayDomainFacade.update(
      item,
      body as Partial<Holiday>,
    )
    return itemUpdated
  }

  @Delete('/:holidayId')
  async delete(@Param('holidayId') holidayId: string) {
    const item = await this.holidayDomainFacade.findOneByIdOrFail(holidayId)

    await this.holidayDomainFacade.delete(item)

    return item
  }
}
