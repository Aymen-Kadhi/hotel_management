import { Employee } from '../employee'

export class Holiday {
  id: string

  startDate: string

  endDate: string

  employeeId: string

  employee?: Employee

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
