import { Resolver, Query } from '@nestjs/graphql'

import { StoreService } from './store.service'
import { StoreConfig } from './store.model'

@Resolver((of) => StoreConfig)
export class StoreResolver {
  constructor(private readonly service: StoreService) {}

  @Query((returns) => StoreConfig, {
    description: `Query website store config.`
  })
  async getStoreConfig() {
    return this.service.getStoreConfig()
  }
}
