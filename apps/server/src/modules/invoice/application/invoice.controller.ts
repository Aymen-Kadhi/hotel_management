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
import { Invoice, InvoiceDomainFacade } from '@server/modules/invoice/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { InvoiceApplicationEvent } from './invoice.application.event'
import { InvoiceCreateDto, InvoiceUpdateDto } from './invoice.dto'

@Controller('/v1/invoices')
export class InvoiceController {
  constructor(
    private eventService: EventService,
    private invoiceDomainFacade: InvoiceDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.invoiceDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: InvoiceCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.invoiceDomainFacade.create(body)

    await this.eventService.emit<InvoiceApplicationEvent.InvoiceCreated.Payload>(
      InvoiceApplicationEvent.InvoiceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:invoiceId')
  async findOne(
    @Param('invoiceId') invoiceId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.invoiceDomainFacade.findOneByIdOrFail(
      invoiceId,
      queryOptions,
    )

    return item
  }

  @Patch('/:invoiceId')
  async update(
    @Param('invoiceId') invoiceId: string,
    @Body() body: InvoiceUpdateDto,
  ) {
    const item = await this.invoiceDomainFacade.findOneByIdOrFail(invoiceId)

    const itemUpdated = await this.invoiceDomainFacade.update(
      item,
      body as Partial<Invoice>,
    )
    return itemUpdated
  }

  @Delete('/:invoiceId')
  async delete(@Param('invoiceId') invoiceId: string) {
    const item = await this.invoiceDomainFacade.findOneByIdOrFail(invoiceId)

    await this.invoiceDomainFacade.delete(item)

    return item
  }
}
