import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Holiday } from './holiday.model'

export class HolidayApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Holiday>,
  ): Promise<Holiday[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/holidays${buildOptions}`)
  }

  static findOne(
    holidayId: string,
    queryOptions?: ApiHelper.QueryOptions<Holiday>,
  ): Promise<Holiday> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/holidays/${holidayId}${buildOptions}`)
  }

  static createOne(values: Partial<Holiday>): Promise<Holiday> {
    return HttpService.api.post(`/v1/holidays`, values)
  }

  static updateOne(
    holidayId: string,
    values: Partial<Holiday>,
  ): Promise<Holiday> {
    return HttpService.api.patch(`/v1/holidays/${holidayId}`, values)
  }

  static deleteOne(holidayId: string): Promise<void> {
    return HttpService.api.delete(`/v1/holidays/${holidayId}`)
  }

  static findManyByEmployeeId(
    employeeId: string,
    queryOptions?: ApiHelper.QueryOptions<Holiday>,
  ): Promise<Holiday[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/employees/employee/${employeeId}/holidays${buildOptions}`,
    )
  }

  static createOneByEmployeeId(
    employeeId: string,
    values: Partial<Holiday>,
  ): Promise<Holiday> {
    return HttpService.api.post(
      `/v1/employees/employee/${employeeId}/holidays`,
      values,
    )
  }
}
