import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { EmployeeDomainModule } from '../domain'
import { EmployeeController } from './employee.controller'

@Module({
  imports: [AuthenticationDomainModule, EmployeeDomainModule],
  controllers: [EmployeeController],
  providers: [],
})
export class EmployeeApplicationModule {}
