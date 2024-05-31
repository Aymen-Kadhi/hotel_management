import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Holiday } from '../../../modules/holiday/domain'

import { PerformanceReport } from '../../../modules/performanceReport/domain'

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @Column({})
  email: string

  @Column({})
  phone: string

  @Column({})
  position: string

  @ColumnNumeric({ type: 'numeric' })
  salary: number

  @OneToMany(() => Holiday, child => child.employee)
  holidays?: Holiday[]

  @OneToMany(() => PerformanceReport, child => child.employee)
  performanceReports?: PerformanceReport[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
