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

import { Employee } from '../../../modules/employee/domain'

@Entity()
export class PerformanceReport {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  reportDate: string

  @ColumnNumeric({ type: 'numeric' })
  performanceScore: number

  @Column({})
  employeeId: string

  @ManyToOne(() => Employee, parent => parent.performanceReports)
  @JoinColumn({ name: 'employeeId' })
  employee?: Employee

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
