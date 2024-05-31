import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Hotel as HotelModel } from './hotel/hotel.model'

import { Room as RoomModel } from './room/room.model'

import { Reservation as ReservationModel } from './reservation/reservation.model'

import { Invoice as InvoiceModel } from './invoice/invoice.model'

import { StoreItem as StoreItemModel } from './storeItem/storeItem.model'

import { Employee as EmployeeModel } from './employee/employee.model'

import { Holiday as HolidayModel } from './holiday/holiday.model'

import { PerformanceReport as PerformanceReportModel } from './performanceReport/performanceReport.model'

import { ServiceConsumption as ServiceConsumptionModel } from './serviceConsumption/serviceConsumption.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Hotel extends HotelModel {}

  export class Room extends RoomModel {}

  export class Reservation extends ReservationModel {}

  export class Invoice extends InvoiceModel {}

  export class StoreItem extends StoreItemModel {}

  export class Employee extends EmployeeModel {}

  export class Holiday extends HolidayModel {}

  export class PerformanceReport extends PerformanceReportModel {}

  export class ServiceConsumption extends ServiceConsumptionModel {}
}
