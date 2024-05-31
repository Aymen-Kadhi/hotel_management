import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ServiceConsumption } from './serviceConsumption.model'

export class ServiceConsumptionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<ServiceConsumption>,
  ): Promise<ServiceConsumption[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/serviceConsumptions${buildOptions}`)
  }

  static findOne(
    serviceConsumptionId: string,
    queryOptions?: ApiHelper.QueryOptions<ServiceConsumption>,
  ): Promise<ServiceConsumption> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/serviceConsumptions/${serviceConsumptionId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<ServiceConsumption>,
  ): Promise<ServiceConsumption> {
    return HttpService.api.post(`/v1/serviceConsumptions`, values)
  }

  static updateOne(
    serviceConsumptionId: string,
    values: Partial<ServiceConsumption>,
  ): Promise<ServiceConsumption> {
    return HttpService.api.patch(
      `/v1/serviceConsumptions/${serviceConsumptionId}`,
      values,
    )
  }

  static deleteOne(serviceConsumptionId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/serviceConsumptions/${serviceConsumptionId}`,
    )
  }

  static findManyByReservationId(
    reservationId: string,
    queryOptions?: ApiHelper.QueryOptions<ServiceConsumption>,
  ): Promise<ServiceConsumption[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/reservations/reservation/${reservationId}/serviceConsumptions${buildOptions}`,
    )
  }

  static createOneByReservationId(
    reservationId: string,
    values: Partial<ServiceConsumption>,
  ): Promise<ServiceConsumption> {
    return HttpService.api.post(
      `/v1/reservations/reservation/${reservationId}/serviceConsumptions`,
      values,
    )
  }
}
