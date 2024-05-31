import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ServiceConsumptionDomainFacade } from '@server/modules/serviceConsumption/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ServiceConsumptionApplicationEvent } from './serviceConsumption.application.event'
import { ServiceConsumptionCreateDto } from './serviceConsumption.dto'

import { ReservationDomainFacade } from '../../reservation/domain'

@Controller('/v1/reservations')
export class ServiceConsumptionByReservationController {
  constructor(
    private reservationDomainFacade: ReservationDomainFacade,

    private serviceConsumptionDomainFacade: ServiceConsumptionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/reservation/:reservationId/serviceConsumptions')
  async findManyReservationId(
    @Param('reservationId') reservationId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.reservationDomainFacade.findOneByIdOrFail(reservationId)

    const items =
      await this.serviceConsumptionDomainFacade.findManyByReservation(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/reservation/:reservationId/serviceConsumptions')
  async createByReservationId(
    @Param('reservationId') reservationId: string,
    @Body() body: ServiceConsumptionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, reservationId }

    const item = await this.serviceConsumptionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ServiceConsumptionApplicationEvent.ServiceConsumptionCreated.Payload>(
      ServiceConsumptionApplicationEvent.ServiceConsumptionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
