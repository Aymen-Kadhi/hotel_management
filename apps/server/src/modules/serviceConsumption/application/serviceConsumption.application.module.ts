import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ServiceConsumptionDomainModule } from '../domain'
import { ServiceConsumptionController } from './serviceConsumption.controller'

import { ReservationDomainModule } from '../../../modules/reservation/domain'

import { ServiceConsumptionByReservationController } from './serviceConsumptionByReservation.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ServiceConsumptionDomainModule,

    ReservationDomainModule,
  ],
  controllers: [
    ServiceConsumptionController,

    ServiceConsumptionByReservationController,
  ],
  providers: [],
})
export class ServiceConsumptionApplicationModule {}
