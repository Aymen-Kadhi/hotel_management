import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Holiday } from './holiday.model'

import { Employee } from '../../employee/domain'

@Injectable()
export class HolidayDomainFacade {
  constructor(
    @InjectRepository(Holiday)
    private repository: Repository<Holiday>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Holiday>): Promise<Holiday> {
    return this.repository.save(values)
  }

  async update(item: Holiday, values: Partial<Holiday>): Promise<Holiday> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Holiday): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Holiday> = {},
  ): Promise<Holiday[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Holiday> = {},
  ): Promise<Holiday> {
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

  async findManyByEmployee(
    item: Employee,
    queryOptions: RequestHelper.QueryOptions<Holiday> = {},
  ): Promise<Holiday[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('employee')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        employeeId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
