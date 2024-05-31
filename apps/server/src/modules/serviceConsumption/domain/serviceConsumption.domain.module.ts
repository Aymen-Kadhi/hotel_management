import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ServiceConsumptionDomainFacade } from './serviceConsumption.domain.facade'
import { ServiceConsumption } from './serviceConsumption.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceConsumption]),
    DatabaseHelperModule,
  ],
  providers: [ServiceConsumptionDomainFacade, ServiceConsumptionDomainFacade],
  exports: [ServiceConsumptionDomainFacade],
})
export class ServiceConsumptionDomainModule {}
