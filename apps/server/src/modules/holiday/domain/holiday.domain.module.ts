import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { HolidayDomainFacade } from './holiday.domain.facade'
import { Holiday } from './holiday.model'

@Module({
  imports: [TypeOrmModule.forFeature([Holiday]), DatabaseHelperModule],
  providers: [HolidayDomainFacade, HolidayDomainFacade],
  exports: [HolidayDomainFacade],
})
export class HolidayDomainModule {}
