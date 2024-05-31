import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { InvoiceDomainFacade } from './invoice.domain.facade'
import { Invoice } from './invoice.model'

@Module({
  imports: [TypeOrmModule.forFeature([Invoice]), DatabaseHelperModule],
  providers: [InvoiceDomainFacade, InvoiceDomainFacade],
  exports: [InvoiceDomainFacade],
})
export class InvoiceDomainModule {}
