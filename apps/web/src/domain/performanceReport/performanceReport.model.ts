import { Employee } from '../employee'

export class PerformanceReport {
  id: string

  reportDate: string

  performanceScore: number

  employeeId: string

  employee?: Employee

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
