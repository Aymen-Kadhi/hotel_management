import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { HolidayDomainModule } from '../domain'
import { HolidayController } from './holiday.controller'

import { EmployeeDomainModule } from '../../../modules/employee/domain'

import { HolidayByEmployeeController } from './holidayByEmployee.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    HolidayDomainModule,

    EmployeeDomainModule,
  ],
  controllers: [HolidayController, HolidayByEmployeeController],
  providers: [],
})
export class HolidayApplicationModule {}
