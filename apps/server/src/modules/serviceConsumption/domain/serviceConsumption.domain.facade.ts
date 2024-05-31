import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { ServiceConsumption } from './serviceConsumption.model'

import { Reservation } from '../../reservation/domain'

@Injectable()
export class ServiceConsumptionDomainFacade {
  constructor(
    @InjectRepository(ServiceConsumption)
    private repository: Repository<ServiceConsumption>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<ServiceConsumption>,
  ): Promise<ServiceConsumption> {
    return this.repository.save(values)
  }

  async update(
    item: ServiceConsumption,
    values: Partial<ServiceConsumption>,
  ): Promise<ServiceConsumption> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: ServiceConsumption): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<ServiceConsumption> = {},
  ): Promise<ServiceConsumption[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<ServiceConsumption> = {},
  ): Promise<ServiceConsumption> {
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

  async findManyByReservation(
    item: Reservation,
    queryOptions: RequestHelper.QueryOptions<ServiceConsumption> = {},
  ): Promise<ServiceConsumption[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('reservation')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        reservationId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
