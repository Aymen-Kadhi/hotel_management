import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  StoreItem,
  StoreItemDomainFacade,
} from '@server/modules/storeItem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { StoreItemApplicationEvent } from './storeItem.application.event'
import { StoreItemCreateDto, StoreItemUpdateDto } from './storeItem.dto'

@Controller('/v1/storeItems')
export class StoreItemController {
  constructor(
    private eventService: EventService,
    private storeItemDomainFacade: StoreItemDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.storeItemDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: StoreItemCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.storeItemDomainFacade.create(body)

    await this.eventService.emit<StoreItemApplicationEvent.StoreItemCreated.Payload>(
      StoreItemApplicationEvent.StoreItemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:storeItemId')
  async findOne(
    @Param('storeItemId') storeItemId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.storeItemDomainFacade.findOneByIdOrFail(
      storeItemId,
      queryOptions,
    )

    return item
  }

  @Patch('/:storeItemId')
  async update(
    @Param('storeItemId') storeItemId: string,
    @Body() body: StoreItemUpdateDto,
  ) {
    const item = await this.storeItemDomainFacade.findOneByIdOrFail(storeItemId)

    const itemUpdated = await this.storeItemDomainFacade.update(
      item,
      body as Partial<StoreItem>,
    )
    return itemUpdated
  }

  @Delete('/:storeItemId')
  async delete(@Param('storeItemId') storeItemId: string) {
    const item = await this.storeItemDomainFacade.findOneByIdOrFail(storeItemId)

    await this.storeItemDomainFacade.delete(item)

    return item
  }
}
