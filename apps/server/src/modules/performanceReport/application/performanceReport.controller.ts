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
  PerformanceReport,
  PerformanceReportDomainFacade,
} from '@server/modules/performanceReport/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { PerformanceReportApplicationEvent } from './performanceReport.application.event'
import {
  PerformanceReportCreateDto,
  PerformanceReportUpdateDto,
} from './performanceReport.dto'

@Controller('/v1/performanceReports')
export class PerformanceReportController {
  constructor(
    private eventService: EventService,
    private performanceReportDomainFacade: PerformanceReportDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items =
      await this.performanceReportDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: PerformanceReportCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.performanceReportDomainFacade.create(body)

    await this.eventService.emit<PerformanceReportApplicationEvent.PerformanceReportCreated.Payload>(
      PerformanceReportApplicationEvent.PerformanceReportCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:performanceReportId')
  async findOne(
    @Param('performanceReportId') performanceReportId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.performanceReportDomainFacade.findOneByIdOrFail(
      performanceReportId,
      queryOptions,
    )

    return item
  }

  @Patch('/:performanceReportId')
  async update(
    @Param('performanceReportId') performanceReportId: string,
    @Body() body: PerformanceReportUpdateDto,
  ) {
    const item =
      await this.performanceReportDomainFacade.findOneByIdOrFail(
        performanceReportId,
      )

    const itemUpdated = await this.performanceReportDomainFacade.update(
      item,
      body as Partial<PerformanceReport>,
    )
    return itemUpdated
  }

  @Delete('/:performanceReportId')
  async delete(@Param('performanceReportId') performanceReportId: string) {
    const item =
      await this.performanceReportDomainFacade.findOneByIdOrFail(
        performanceReportId,
      )

    await this.performanceReportDomainFacade.delete(item)

    return item
  }
}
