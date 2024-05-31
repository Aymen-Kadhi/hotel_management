import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationHotelSubscriber } from './subscribers/notification.hotel.subscriber'

import { NotificationRoomSubscriber } from './subscribers/notification.room.subscriber'

import { NotificationReservationSubscriber } from './subscribers/notification.reservation.subscriber'

import { NotificationInvoiceSubscriber } from './subscribers/notification.invoice.subscriber'

import { NotificationStoreItemSubscriber } from './subscribers/notification.storeItem.subscriber'

import { NotificationEmployeeSubscriber } from './subscribers/notification.employee.subscriber'

import { NotificationHolidaySubscriber } from './subscribers/notification.holiday.subscriber'

import { NotificationPerformanceReportSubscriber } from './subscribers/notification.performanceReport.subscriber'

import { NotificationServiceConsumptionSubscriber } from './subscribers/notification.serviceConsumption.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationHotelSubscriber,

    NotificationRoomSubscriber,

    NotificationReservationSubscriber,

    NotificationInvoiceSubscriber,

    NotificationStoreItemSubscriber,

    NotificationEmployeeSubscriber,

    NotificationHolidaySubscriber,

    NotificationPerformanceReportSubscriber,

    NotificationServiceConsumptionSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
