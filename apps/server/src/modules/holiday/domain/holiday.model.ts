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
export class Holiday {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  startDate: string

  @Column({})
  endDate: string

  @Column({})
  employeeId: string

  @ManyToOne(() => Employee, parent => parent.holidays)
  @JoinColumn({ name: 'employeeId' })
  employee?: Employee

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
