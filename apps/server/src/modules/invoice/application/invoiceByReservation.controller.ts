import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { InvoiceDomainFacade } from '@server/modules/invoice/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { InvoiceApplicationEvent } from './invoice.application.event'
import { InvoiceCreateDto } from './invoice.dto'

import { ReservationDomainFacade } from '../../reservation/domain'

@Controller('/v1/reservations')
export class InvoiceByReservationController {
  constructor(
    private reservationDomainFacade: ReservationDomainFacade,

    private invoiceDomainFacade: InvoiceDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/reservation/:reservationId/invoices')
  async findManyReservationId(
    @Param('reservationId') reservationId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.reservationDomainFacade.findOneByIdOrFail(reservationId)

    const items = await this.invoiceDomainFacade.findManyByReservation(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/reservation/:reservationId/invoices')
  async createByReservationId(
    @Param('reservationId') reservationId: string,
    @Body() body: InvoiceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, reservationId }

    const item = await this.invoiceDomainFacade.create(valuesUpdated)

    await this.eventService.emit<InvoiceApplicationEvent.InvoiceCreated.Payload>(
      InvoiceApplicationEvent.InvoiceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
