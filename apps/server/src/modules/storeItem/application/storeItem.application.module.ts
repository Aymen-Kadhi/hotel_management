import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { StoreItemDomainModule } from '../domain'
import { StoreItemController } from './storeItem.controller'

@Module({
  imports: [AuthenticationDomainModule, StoreItemDomainModule],
  controllers: [StoreItemController],
  providers: [],
})
export class StoreItemApplicationModule {}
