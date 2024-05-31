import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { HotelApi } from './hotel/hotel.api'

import { RoomApi } from './room/room.api'

import { ReservationApi } from './reservation/reservation.api'

import { InvoiceApi } from './invoice/invoice.api'

import { StoreItemApi } from './storeItem/storeItem.api'

import { EmployeeApi } from './employee/employee.api'

import { HolidayApi } from './holiday/holiday.api'

import { PerformanceReportApi } from './performanceReport/performanceReport.api'

import { ServiceConsumptionApi } from './serviceConsumption/serviceConsumption.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Hotel extends HotelApi {}

  export class Room extends RoomApi {}

  export class Reservation extends ReservationApi {}

  export class Invoice extends InvoiceApi {}

  export class StoreItem extends StoreItemApi {}

  export class Employee extends EmployeeApi {}

  export class Holiday extends HolidayApi {}

  export class PerformanceReport extends PerformanceReportApi {}

  export class ServiceConsumption extends ServiceConsumptionApi {}
}
