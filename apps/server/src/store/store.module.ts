import { Module } from '@nestjs/common'

import { StoreController } from './store.controller'
import { StoreResolver } from './store.resolver'
import { StoreService } from './store.service'

@Module({
  controllers: [StoreController],
  providers: [StoreResolver, StoreService]
})
export class StoreModule {}
