import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PerformanceReportDomainFacade } from '@server/modules/performanceReport/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PerformanceReportApplicationEvent } from './performanceReport.application.event'
import { PerformanceReportCreateDto } from './performanceReport.dto'

import { EmployeeDomainFacade } from '../../employee/domain'

@Controller('/v1/employees')
export class PerformanceReportByEmployeeController {
  constructor(
    private employeeDomainFacade: EmployeeDomainFacade,

    private performanceReportDomainFacade: PerformanceReportDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/employee/:employeeId/performanceReports')
  async findManyEmployeeId(
    @Param('employeeId') employeeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.employeeDomainFacade.findOneByIdOrFail(employeeId)

    const items = await this.performanceReportDomainFacade.findManyByEmployee(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/employee/:employeeId/performanceReports')
  async createByEmployeeId(
    @Param('employeeId') employeeId: string,
    @Body() body: PerformanceReportCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, employeeId }

    const item = await this.performanceReportDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PerformanceReportApplicationEvent.PerformanceReportCreated.Payload>(
      PerformanceReportApplicationEvent.PerformanceReportCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
