import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Invoice } from './invoice.model'

export class InvoiceApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Invoice>,
  ): Promise<Invoice[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/invoices${buildOptions}`)
  }

  static findOne(
    invoiceId: string,
    queryOptions?: ApiHelper.QueryOptions<Invoice>,
  ): Promise<Invoice> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/invoices/${invoiceId}${buildOptions}`)
  }

  static createOne(values: Partial<Invoice>): Promise<Invoice> {
    return HttpService.api.post(`/v1/invoices`, values)
  }

  static updateOne(
    invoiceId: string,
    values: Partial<Invoice>,
  ): Promise<Invoice> {
    return HttpService.api.patch(`/v1/invoices/${invoiceId}`, values)
  }

  static deleteOne(invoiceId: string): Promise<void> {
    return HttpService.api.delete(`/v1/invoices/${invoiceId}`)
  }

  static findManyByReservationId(
    reservationId: string,
    queryOptions?: ApiHelper.QueryOptions<Invoice>,
  ): Promise<Invoice[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/reservations/reservation/${reservationId}/invoices${buildOptions}`,
    )
  }

  static createOneByReservationId(
    reservationId: string,
    values: Partial<Invoice>,
  ): Promise<Invoice> {
    return HttpService.api.post(
      `/v1/reservations/reservation/${reservationId}/invoices`,
      values,
    )
  }
}
