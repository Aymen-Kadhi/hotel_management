import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { StoreItem } from './storeItem.model'

@Injectable()
export class StoreItemDomainFacade {
  constructor(
    @InjectRepository(StoreItem)
    private repository: Repository<StoreItem>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<StoreItem>): Promise<StoreItem> {
    return this.repository.save(values)
  }

  async update(
    item: StoreItem,
    values: Partial<StoreItem>,
  ): Promise<StoreItem> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: StoreItem): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<StoreItem> = {},
  ): Promise<StoreItem[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<StoreItem> = {},
  ): Promise<StoreItem> {
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
}
