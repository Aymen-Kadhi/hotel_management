import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { StoreItem } from './storeItem.model'

export class StoreItemApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<StoreItem>,
  ): Promise<StoreItem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/storeItems${buildOptions}`)
  }

  static findOne(
    storeItemId: string,
    queryOptions?: ApiHelper.QueryOptions<StoreItem>,
  ): Promise<StoreItem> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/storeItems/${storeItemId}${buildOptions}`)
  }

  static createOne(values: Partial<StoreItem>): Promise<StoreItem> {
    return HttpService.api.post(`/v1/storeItems`, values)
  }

  static updateOne(
    storeItemId: string,
    values: Partial<StoreItem>,
  ): Promise<StoreItem> {
    return HttpService.api.patch(`/v1/storeItems/${storeItemId}`, values)
  }

  static deleteOne(storeItemId: string): Promise<void> {
    return HttpService.api.delete(`/v1/storeItems/${storeItemId}`)
  }
}
