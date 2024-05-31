import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { PerformanceReport } from './performanceReport.model'

import { Employee } from '../../employee/domain'

@Injectable()
export class PerformanceReportDomainFacade {
  constructor(
    @InjectRepository(PerformanceReport)
    private repository: Repository<PerformanceReport>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<PerformanceReport>): Promise<PerformanceReport> {
    return this.repository.save(values)
  }

  async update(
    item: PerformanceReport,
    values: Partial<PerformanceReport>,
  ): Promise<PerformanceReport> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: PerformanceReport): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<PerformanceReport> = {},
  ): Promise<PerformanceReport[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<PerformanceReport> = {},
  ): Promise<PerformanceReport> {
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
    queryOptions: RequestHelper.QueryOptions<PerformanceReport> = {},
  ): Promise<PerformanceReport[]> {
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
