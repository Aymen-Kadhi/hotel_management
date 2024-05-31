import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PerformanceReportDomainModule } from '../domain'
import { PerformanceReportController } from './performanceReport.controller'

import { EmployeeDomainModule } from '../../../modules/employee/domain'

import { PerformanceReportByEmployeeController } from './performanceReportByEmployee.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    PerformanceReportDomainModule,

    EmployeeDomainModule,
  ],
  controllers: [
    PerformanceReportController,

    PerformanceReportByEmployeeController,
  ],
  providers: [],
})
export class PerformanceReportApplicationModule {}
