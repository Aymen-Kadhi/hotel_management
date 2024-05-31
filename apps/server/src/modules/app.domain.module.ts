import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { HotelDomainModule } from './hotel/domain'

import { RoomDomainModule } from './room/domain'

import { ReservationDomainModule } from './reservation/domain'

import { InvoiceDomainModule } from './invoice/domain'

import { StoreItemDomainModule } from './storeItem/domain'

import { EmployeeDomainModule } from './employee/domain'

import { HolidayDomainModule } from './holiday/domain'

import { PerformanceReportDomainModule } from './performanceReport/domain'

import { ServiceConsumptionDomainModule } from './serviceConsumption/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    HotelDomainModule,

    RoomDomainModule,

    ReservationDomainModule,

    InvoiceDomainModule,

    StoreItemDomainModule,

    EmployeeDomainModule,

    HolidayDomainModule,

    PerformanceReportDomainModule,

    ServiceConsumptionDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
