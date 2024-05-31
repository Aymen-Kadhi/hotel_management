import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { InvoiceDomainModule } from '../domain'
import { InvoiceController } from './invoice.controller'

import { ReservationDomainModule } from '../../../modules/reservation/domain'

import { InvoiceByReservationController } from './invoiceByReservation.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    InvoiceDomainModule,

    ReservationDomainModule,
  ],
  controllers: [InvoiceController, InvoiceByReservationController],
  providers: [],
})
export class InvoiceApplicationModule {}
