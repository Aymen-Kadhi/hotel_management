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
export class ServiceConsumption {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  serviceName: string

  @ColumnNumeric({ type: 'numeric' })
  cost: number

  @Column({})
  reservationId: string

  @ManyToOne(() => Reservation, parent => parent.serviceConsumptions)
  @JoinColumn({ name: 'reservationId' })
  reservation?: Reservation

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
