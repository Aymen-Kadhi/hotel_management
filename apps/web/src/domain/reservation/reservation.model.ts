import { User } from '../user'

import { Room } from '../room'

import { Invoice } from '../invoice'

import { ServiceConsumption } from '../serviceConsumption'

export class Reservation {
  id: string

  checkInDate: string

  checkOutDate: string

  status: string

  userId: string

  user?: User

  roomId: string

  room?: Room

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  invoices?: Invoice[]

  serviceConsumptions?: ServiceConsumption[]
}
