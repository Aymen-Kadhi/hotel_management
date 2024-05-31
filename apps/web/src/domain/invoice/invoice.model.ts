import { Reservation } from '../reservation'

export class Invoice {
  id: string

  totalAmount: number

  issueDate: string

  reservationId: string

  reservation?: Reservation

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
