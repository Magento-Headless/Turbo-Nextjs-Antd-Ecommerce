import { Injectable } from '@nestjs/common'

@Injectable()
export class StoreService {
  getStoreConfig(): any {
    return {
      copyright: 'copyright',
      locale: 'en-US',
      timezone: 'US'
    }
  }
}
