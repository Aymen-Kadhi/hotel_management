import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { HolidayDomainFacade } from '@server/modules/holiday/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { HolidayApplicationEvent } from './holiday.application.event'
import { HolidayCreateDto } from './holiday.dto'

import { EmployeeDomainFacade } from '../../employee/domain'

@Controller('/v1/employees')
export class HolidayByEmployeeController {
  constructor(
    private employeeDomainFacade: EmployeeDomainFacade,

    private holidayDomainFacade: HolidayDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/employee/:employeeId/holidays')
  async findManyEmployeeId(
    @Param('employeeId') employeeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.employeeDomainFacade.findOneByIdOrFail(employeeId)

    const items = await this.holidayDomainFacade.findManyByEmployee(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/employee/:employeeId/holidays')
  async createByEmployeeId(
    @Param('employeeId') employeeId: string,
    @Body() body: HolidayCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, employeeId }

    const item = await this.holidayDomainFacade.create(valuesUpdated)

    await this.eventService.emit<HolidayApplicationEvent.HolidayCreated.Payload>(
      HolidayApplicationEvent.HolidayCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
