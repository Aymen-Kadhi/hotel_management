import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Hotel } from './hotel.model'

export class HotelApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Hotel>,
  ): Promise<Hotel[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/hotels${buildOptions}`)
  }

  static findOne(
    hotelId: string,
    queryOptions?: ApiHelper.QueryOptions<Hotel>,
  ): Promise<Hotel> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/hotels/${hotelId}${buildOptions}`)
  }

  static createOne(values: Partial<Hotel>): Promise<Hotel> {
    return HttpService.api.post(`/v1/hotels`, values)
  }

  static updateOne(hotelId: string, values: Partial<Hotel>): Promise<Hotel> {
    return HttpService.api.patch(`/v1/hotels/${hotelId}`, values)
  }

  static deleteOne(hotelId: string): Promise<void> {
    return HttpService.api.delete(`/v1/hotels/${hotelId}`)
  }
}
