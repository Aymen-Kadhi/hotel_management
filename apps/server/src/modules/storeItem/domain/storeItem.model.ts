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

@Entity()
export class StoreItem {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  name: string

  @ColumnNumeric({ type: 'numeric' })
  quantity: number

  @ColumnNumeric({ type: 'numeric' })
  price: number

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
