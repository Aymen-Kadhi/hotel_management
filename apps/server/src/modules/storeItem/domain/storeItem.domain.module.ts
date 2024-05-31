import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { StoreItemDomainFacade } from './storeItem.domain.facade'
import { StoreItem } from './storeItem.model'

@Module({
  imports: [TypeOrmModule.forFeature([StoreItem]), DatabaseHelperModule],
  providers: [StoreItemDomainFacade, StoreItemDomainFacade],
  exports: [StoreItemDomainFacade],
})
export class StoreItemDomainModule {}
