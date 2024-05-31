import { Hotel } from '../hotel'

import { Reservation } from '../reservation'

export class Room {
  id: string

  roomNumber: string

  type: string

  price: number

  availabilityStatus: string

  hotelId: string

  hotel?: Hotel

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  reservations?: Reservation[]
}
