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
import {
  ServiceConsumption,
  ServiceConsumptionDomainFacade,
} from '@server/modules/serviceConsumption/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ServiceConsumptionApplicationEvent } from './serviceConsumption.application.event'
import {
  ServiceConsumptionCreateDto,
  ServiceConsumptionUpdateDto,
} from './serviceConsumption.dto'

@Controller('/v1/serviceConsumptions')
export class ServiceConsumptionController {
  constructor(
    private eventService: EventService,
    private serviceConsumptionDomainFacade: ServiceConsumptionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.serviceConsumptionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ServiceConsumptionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.serviceConsumptionDomainFacade.create(body)

    await this.eventService.emit<ServiceConsumptionApplicationEvent.ServiceConsumptionCreated.Payload>(
      ServiceConsumptionApplicationEvent.ServiceConsumptionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:serviceConsumptionId')
  async findOne(
    @Param('serviceConsumptionId') serviceConsumptionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.serviceConsumptionDomainFacade.findOneByIdOrFail(
      serviceConsumptionId,
      queryOptions,
    )

    return item
  }

  @Patch('/:serviceConsumptionId')
  async update(
    @Param('serviceConsumptionId') serviceConsumptionId: string,
    @Body() body: ServiceConsumptionUpdateDto,
  ) {
    const item =
      await this.serviceConsumptionDomainFacade.findOneByIdOrFail(
        serviceConsumptionId,
      )

    const itemUpdated = await this.serviceConsumptionDomainFacade.update(
      item,
      body as Partial<ServiceConsumption>,
    )
    return itemUpdated
  }

  @Delete('/:serviceConsumptionId')
  async delete(@Param('serviceConsumptionId') serviceConsumptionId: string) {
    const item =
      await this.serviceConsumptionDomainFacade.findOneByIdOrFail(
        serviceConsumptionId,
      )

    await this.serviceConsumptionDomainFacade.delete(item)

    return item
  }
}
