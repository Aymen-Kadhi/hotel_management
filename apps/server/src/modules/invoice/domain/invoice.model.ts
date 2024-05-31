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

import { Reservation } from '../../../modules/reservation/domain'

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  totalAmount: number

  @Column({})
  issueDate: string

  @Column({})
  reservationId: string

  @ManyToOne(() => Reservation, parent => parent.invoices)
  @JoinColumn({ name: 'reservationId' })
  reservation?: Reservation

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
