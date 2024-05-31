import { Room } from '../room'

export class Hotel {
  id: string

  name: string

  address: string

  description?: string

  amenities?: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  rooms?: Room[]
}
