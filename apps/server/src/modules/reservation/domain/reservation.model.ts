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

import { User } from '../../../modules/user/domain'

import { Room } from '../../../modules/room/domain'

import { Invoice } from '../../../modules/invoice/domain'

import { ServiceConsumption } from '../../../modules/serviceConsumption/domain'

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  checkInDate: string

  @Column({})
  checkOutDate: string

  @Column({})
  status: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.reservations)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  roomId: string

  @ManyToOne(() => Room, parent => parent.reservations)
  @JoinColumn({ name: 'roomId' })
  room?: Room

  @OneToMany(() => Invoice, child => child.reservation)
  invoices?: Invoice[]

  @OneToMany(() => ServiceConsumption, child => child.reservation)
  serviceConsumptions?: ServiceConsumption[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
