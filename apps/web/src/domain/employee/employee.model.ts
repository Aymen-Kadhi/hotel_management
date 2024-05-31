import { Holiday } from '../holiday'

import { PerformanceReport } from '../performanceReport'

export class Employee {
  id: string

  name: string

  email: string

  phone: string

  position: string

  salary: number

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  holidays?: Holiday[]

  performanceReports?: PerformanceReport[]
}
