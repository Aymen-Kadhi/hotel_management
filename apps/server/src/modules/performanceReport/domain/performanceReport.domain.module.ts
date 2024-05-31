import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { PerformanceReportDomainFacade } from './performanceReport.domain.facade'
import { PerformanceReport } from './performanceReport.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([PerformanceReport]),
    DatabaseHelperModule,
  ],
  providers: [PerformanceReportDomainFacade, PerformanceReportDomainFacade],
  exports: [PerformanceReportDomainFacade],
})
export class PerformanceReportDomainModule {}
