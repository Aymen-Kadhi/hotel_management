import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { HotelApplicationModule } from './hotel/application'

import { RoomApplicationModule } from './room/application'

import { ReservationApplicationModule } from './reservation/application'

import { InvoiceApplicationModule } from './invoice/application'

import { StoreItemApplicationModule } from './storeItem/application'

import { EmployeeApplicationModule } from './employee/application'

import { HolidayApplicationModule } from './holiday/application'

import { PerformanceReportApplicationModule } from './performanceReport/application'

import { ServiceConsumptionApplicationModule } from './serviceConsumption/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    HotelApplicationModule,

    RoomApplicationModule,

    ReservationApplicationModule,

    InvoiceApplicationModule,

    StoreItemApplicationModule,

    EmployeeApplicationModule,

    HolidayApplicationModule,

    PerformanceReportApplicationModule,

    ServiceConsumptionApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
