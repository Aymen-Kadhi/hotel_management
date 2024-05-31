import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { PerformanceReport } from './performanceReport.model'

export class PerformanceReportApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<PerformanceReport>,
  ): Promise<PerformanceReport[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/performanceReports${buildOptions}`)
  }

  static findOne(
    performanceReportId: string,
    queryOptions?: ApiHelper.QueryOptions<PerformanceReport>,
  ): Promise<PerformanceReport> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/performanceReports/${performanceReportId}${buildOptions}`,
    )
  }

  static createOne(
    values: Partial<PerformanceReport>,
  ): Promise<PerformanceReport> {
    return HttpService.api.post(`/v1/performanceReports`, values)
  }

  static updateOne(
    performanceReportId: string,
    values: Partial<PerformanceReport>,
  ): Promise<PerformanceReport> {
    return HttpService.api.patch(
      `/v1/performanceReports/${performanceReportId}`,
      values,
    )
  }

  static deleteOne(performanceReportId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/performanceReports/${performanceReportId}`,
    )
  }

  static findManyByEmployeeId(
    employeeId: string,
    queryOptions?: ApiHelper.QueryOptions<PerformanceReport>,
  ): Promise<PerformanceReport[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/employees/employee/${employeeId}/performanceReports${buildOptions}`,
    )
  }

  static createOneByEmployeeId(
    employeeId: string,
    values: Partial<PerformanceReport>,
  ): Promise<PerformanceReport> {
    return HttpService.api.post(
      `/v1/employees/employee/${employeeId}/performanceReports`,
      values,
    )
  }
}
