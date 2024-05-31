import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Room } from './room.model'

import { Hotel } from '../../hotel/domain'

@Injectable()
export class RoomDomainFacade {
  constructor(
    @InjectRepository(Room)
    private repository: Repository<Room>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Room>): Promise<Room> {
    return this.repository.save(values)
  }

  async update(item: Room, values: Partial<Room>): Promise<Room> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Room): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Room> = {},
  ): Promise<Room[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Room> = {},
  ): Promise<Room> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByHotel(
    item: Hotel,
    queryOptions: RequestHelper.QueryOptions<Room> = {},
  ): Promise<Room[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('hotel')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        hotelId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
