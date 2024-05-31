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

import { Hotel } from '../../../modules/hotel/domain'

import { Reservation } from '../../../modules/reservation/domain'

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  roomNumber: string

  @Column({})
  type: string

  @ColumnNumeric({ type: 'numeric' })
  price: number

  @Column({})
  availabilityStatus: string

  @Column({})
  hotelId: string

  @ManyToOne(() => Hotel, parent => parent.rooms)
  @JoinColumn({ name: 'hotelId' })
  hotel?: Hotel

  @OneToMany(() => Reservation, child => child.room)
  reservations?: Reservation[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
