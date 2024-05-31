import { Reservation } from '../reservation'

export class ServiceConsumption {
  id: string

  serviceName: string

  cost: number

  reservationId: string

  reservation?: Reservation

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
